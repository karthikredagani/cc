import React, { useState, useEffect } from 'react';
import { auth, googleProvider, db } from './firebaseConfig'; 
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup } from 'firebase/auth'; 
import { setDoc, doc } from "firebase/firestore";  
// import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs'; // Make sure to install bcryptjs
import './LoginPage.css';

const Register = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(''); // New state for success message
  const navigate = useNavigate();

  const actionCodeSettings = {
    url: 'http://localhost:3000/details', // Replace with your actual website URL
    handleCodeInApp: true,
  };

  // Google Signup Handler
  const handleGoogleAuth = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
      navigate('/');  // Redirect after successful Google signup
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Email Signup Handler
  const handleEmailVerification = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage(''); // Clear success message on new submission

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Hash the password using bcryptjs
      const hashedPassword = await bcrypt.hash(password, 10);

      // Send verification email
      await sendEmailVerification(user, actionCodeSettings);

      // Save user data to Firestore (DO NOT store plaintext password in production)
      await setDoc(doc(db, "users", user.uid), {
        email: email,
        password: hashedPassword
      });

      setIsEmailSent(true);
      setSuccessMessage(`Email sent to ${email}. Please check your inbox to verify your email.`); // Set success message
    } catch (error) {
      console.error('Error sending email verification:', error); // Log the error
      setErrorMessage(error.message); // Display the error message to the user
    } finally {
      setLoading(false);
    }
  };

  // Continuously check for email verification
  useEffect(() => {
    let intervalId;
    if (isEmailSent && !isEmailVerified) {
      intervalId = setInterval(async () => {
        try {
          const user = auth.currentUser;
          await user.reload();
          if (user.emailVerified) {
            setIsEmailVerified(true);
            navigate('/details'); // Redirect to next page after verification
          }
        } catch (error) {
          console.error(error);
        }
      }, 5000); // Check every 5 seconds
    }
    return () => clearInterval(intervalId);
  }, [isEmailSent, isEmailVerified, navigate]);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>

        {isEmailSent && !isEmailVerified ? (
          <div>
            <h3>Waiting for email verification...</h3>
            <p>Please check your inbox to verify your email.</p>
            {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}
          </div>
        ) : (
          <form onSubmit={handleEmailVerification}>
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
              {loading ? 'Sending verification...' : 'Verify Email'}
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        )}

        {/* {!isEmailSent && (
          <button className="google-login-btn" onClick={handleGoogleAuth}>
            <span><FcGoogle /></span> Sign Up with Google
          </button>
        )} */}

        <div className="links">
          <a href="/profile">Already have an account? Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
