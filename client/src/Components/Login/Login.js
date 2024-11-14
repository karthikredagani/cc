import React, { useState, useEffect } from 'react';
import { auth, googleProvider } from './firebaseConfig'; // Firebase config
import { signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, onAuthStateChanged } from 'firebase/auth'; // Firebase auth methods
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc"; // Google icon for login
import './LoginPage.css'; // Import styles

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const navigate = useNavigate();

  // Listen for Firebase auth state changes (e.g., if user logs in or logs out)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchUserDetailsFromMongo(currentUser.uid); // Fetch user details from MongoDB using Firebase UID
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // Fetch personal details from MongoDB using the uid (Firebase UID)
  const fetchUserDetailsFromMongo = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/personal-details/${userId}`);
      const data = await response.json();
      
      if (response.ok) {
        setUserDetails(data); // Set the fetched details to the state
      } else {
        setErrorMessage("User details not found.");
      }
    } catch (error) {
      setErrorMessage('Failed to fetch user details from MongoDB');
    }
  };

  // Handle updating personal details to MongoDB
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:5000/api/personal-details/${user.uid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: userDetails.firstName,
          lastName: userDetails.lastName,
          phoneNumber: userDetails.phoneNumber,
          address: userDetails.address,
        }),
      });

      if (response.ok) {
        setSuccessMessage('Details updated successfully');
        setIsEditing(false);
      } else {
        setErrorMessage('Failed to update details');
      }
    } catch (error) {
      setErrorMessage('Error updating details: ' + error.message);
    }

    setLoading(false);
  };

  // Handle Google Authentication
  const handleGoogleAuth = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      navigate('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);
  };

  // Handle Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      fetchUserDetailsFromMongo(userCredential.user.uid); // Fetch user details from MongoDB using the UID
      navigate('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);
  };

  // Handle Forgot Password (Send reset link)
  const handleForgotPassword = async () => {
    setLoading(true);

    try {
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
      navigate('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        {user ? (
          <>
             <h2>Welcome {userDetails.firstName}{userDetails.lastName}</h2>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            {!isEditing ? (
              <div>
                <p><strong>First Name:</strong> {userDetails.firstName || 'N/A'}</p>
                <p><strong>Last Name:</strong> {userDetails.lastName || 'N/A'}</p>
                <p><strong>Phone Number:</strong> {userDetails.phoneNumber || 'N/A'}</p>
                <p><strong>Address:</strong> {userDetails.address || 'N/A'}</p>
                <button onClick={() => setIsEditing(true)}>Edit Details</button>
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <form onSubmit={handleUpdate}>
                <div className="input-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={userDetails.firstName}
                    onChange={(e) => setUserDetails({ ...userDetails, firstName: e.target.value })}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={userDetails.lastName}
                    onChange={(e) => setUserDetails({ ...userDetails, lastName: e.target.value })}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    value={userDetails.phoneNumber}
                    onChange={(e) => setUserDetails({ ...userDetails, phoneNumber: e.target.value })}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="address">Address</label>
                  <input
                    id="address"
                    value={userDetails.address}
                    onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" disabled={loading}>
                  {loading ? 'Updating...' : 'Update Details'}
                </button>
                <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
              </form>
            )}
          </>
        ) : (
          <>
            <h2>{isForgotPassword ? "Forgot Password" : "Login"}</h2>

            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            {isForgotPassword ? (
              <>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <button onClick={handleForgotPassword} disabled={loading}>
                  {loading ? 'Sending Reset Link...' : 'Send Reset Link'}
                </button>

                <div className="links">
                  <a href="#" onClick={() => setIsForgotPassword(false)}>Back to Login</a>
                </div>
              </>
            ) : (
              <>
                <form onSubmit={handleLogin}>
                  <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                  </button>
                </form>

                <button className="google-login-btn" onClick={handleGoogleAuth}>
                  <span><FcGoogle /></span> Login with Google
                </button>

                <div className="links">
                  <a href="#" onClick={() => setIsForgotPassword(true)}>Forgot Password?</a>
                  <a href="/register">New User? Sign Up</a>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Login;