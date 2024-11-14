import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

import './PersonalDetails.css';

const PersonalDetails = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [userId, setUserId] = useState('');
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [locationFetched, setLocationFetched] = useState(false);


  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      }
    });
    return () => unsubscribe();
  }, []);

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setErrorMessage('Geolocation is not supported by your browser');
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(success, error);
  };

  const success = async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyD78GrV3lhNre2CvosRdRzsZzzzbibWpoY`
      );
      
      const data = await response.json();

      if (data.status === 'OK' && data.results.length > 0) {
        const formattedAddress = data.results[0].formatted_address;
        setAddress(formattedAddress);
      } else {
        setErrorMessage(`Unable to retrieve address: ${data.status}`);
      }
    } catch (err) {
      setErrorMessage('Error fetching location.');
    }
    setIsLocating(false);
  };

  const error = () => {
    setErrorMessage('Unable to retrieve your location');
    setIsLocating(false);
  };

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setErrorMessage('');

  //   if (!firstName || !lastName || !phoneNumber || !address || !userId || !photo) {
  //     setErrorMessage('All fields are required');
  //     setLoading(false);
  //     return;
  //   }

  //   try {
  //     // Convert the image file to Base64
  //     const reader = new FileReader();
  //     reader.readAsDataURL(photo);
  //     reader.onloadend = async () => {
  //       const base64Image = reader.result;

  //       // Prepare form data to send to backend
  //       const formData = {
  //         userId,
  //         firstName,
  //         lastName,
  //         phoneNumber,
  //         address,
  //         photo: base64Image,
  //       };

  //       const response = await fetch('http://localhost:5000/api/personal-details', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(formData),
  //       });

  //       if (response.ok) {
  //         navigate('/');
  //       } else {
  //         const data = await response.json();
  //         setErrorMessage(data.error || 'An error occurred');
  //       }
  //       setLoading(false); // Set loading to false after response
  //     };

  //     reader.onerror = () => {
  //       setErrorMessage('Failed to convert image to Base64');
  //       setLoading(false);
  //     };
  //   } catch (error) {
  //     console.error('Submission error:', error);
  //     setErrorMessage('Failed to submit details');
  //     setLoading(false);
  //   }
  // };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
  
    if (!firstName || !lastName || !phoneNumber || !address || !userId || !photo) {
      setErrorMessage('All fields are required');
      setLoading(false);
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append('userId', userId);
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('phoneNumber', phoneNumber);
      formData.append('address', address);
      formData.append('photo', photo);
  
      const response = await fetch('http://localhost:5000/api/personal-details', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        navigate('/');
      } else {
        const data = await response.json();
        console.log('data:',data)
        setErrorMessage(data.error || 'An error occurred');
      }
      setLoading(false);
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('Failed to submit details');
      setLoading(false);
    }
  };
  
  const handlePhotoChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setPhoto(selectedFile);
      setPhotoPreview(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <div className="auth-container">
    <div className="auth-box">
      <h2>Enter Personal Details</h2>
      <form onSubmit={handleRegister}>
        <div className="input-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            placeholder={isLocating ? 'Fetching location...' : 'Enter your address'}
          />
        </div>
        
        <div className="input-group">
            <label htmlFor="photo">Choose Image</label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={handlePhotoChange}
              required
            />
          </div>

          {photoPreview && (
            <div className="image-preview">
              <h4>Image Preview:</h4>
              <img src={photoPreview} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px' }} />
            </div>
)}

        {/* Add manual location button */}
        <button
          type="button"
          className="location-btn"
          onClick={getCurrentLocation}
          disabled={isLocating}
        >
          {isLocating ? 'Fetching Location...' : 'Take Current Location'}
        </button>
        
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Submit'}
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  </div>
);
};


export default PersonalDetails;