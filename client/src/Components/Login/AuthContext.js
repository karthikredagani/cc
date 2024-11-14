import React, { createContext, useState, useEffect } from 'react';
import { auth, googleProvider } from './firebaseConfig'; // Ensure correct path
import { signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, onAuthStateChanged } from 'firebase/auth';

// Create the context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Holds Firebase user object
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: ''
  });
  const [loading, setLoading] = useState(true); // To handle initial loading state
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchUserDetailsFromMongo(currentUser.uid);
      } else {
        setUser(null);
        setUserDetails({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          address: ''
        });
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Fetch user details from MongoDB
  const fetchUserDetailsFromMongo = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/personal-details/${userId}`);
      const data = await response.json();
      
      if (response.ok) {
        setUserDetails(data);
      } else {
        setErrorMessage("User details not found.");
      }
    } catch (error) {
      setErrorMessage('Failed to fetch user details from MongoDB');
    }
  };

  // Handle updating personal details to MongoDB
  const handleUpdate = async (updatedDetails) => {
    try {
      const response = await fetch(`http://localhost:5000/api/personal-details/${user.uid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedDetails),
      });

      if (response.ok) {
        setSuccessMessage('Details updated successfully');
        setUserDetails(updatedDetails);
      } else {
        setErrorMessage('Failed to update details');
      }
    } catch (error) {
      setErrorMessage('Error updating details: ' + error.message);
    }
  };

  // Handle Google Authentication
  const handleGoogleAuth = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);
  };

  // Handle Email/Password Login
  const handleLogin = async (email, password) => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      fetchUserDetailsFromMongo(userCredential.user.uid);
    } catch (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);
  };

  // Handle Forgot Password (Send reset link)
  const handleForgotPassword = async (email) => {
    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage('Password reset email sent. Please check your inbox.');
    } catch (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setUserDetails({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: ''
      });
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      userDetails,
      loading,
      errorMessage,
      successMessage,
      handleLogin,
      handleGoogleAuth,
      handleForgotPassword,
      handleLogout,
      handleUpdate
    }}>
      {children}
    </AuthContext.Provider>
  );
};
