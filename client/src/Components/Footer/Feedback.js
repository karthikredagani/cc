import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Login/AuthContext'; // Adjust the path as needed
import './Feedback.css'; // Import CSS file for styling

const Feedback = () => {
  const { user, userDetails } = useContext(AuthContext); // Access user and userDetails from AuthContext
  const [formData, setFormData] = useState({
    name: `${userDetails.firstName || ''} ${userDetails.lastName || ''}`.trim(), // Set initial name from userDetails
    email: user?.email || '', // Set initial email from user
    feedback: '',
  });
  const [rating, setRating] = useState(0); // State for star rating
  const [message, setMessage] = useState(''); // State for feedback message

  useEffect(() => {
    // Update form data when userDetails changes
    if (userDetails.firstName || userDetails.lastName || user?.email) {
      setFormData({
        name: `${userDetails.firstName || ''} ${userDetails.lastName || ''}`.trim(),
        email: user?.email || '',
        feedback: '',
      });
    }
  }, [userDetails, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the user is logged in before sending feedback
    if (!user) {
      setMessage('Please log in to send feedback.'); // Show login message
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/feedback', { // Ensure this URL matches your backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, rating }), // Include rating in request
      });

      const result = await response.json();
      if (response.ok) {
        setMessage('Feedback sent successfully!'); // Set success message
        setFormData({ 
          name: `${userDetails.firstName || ''} ${userDetails.lastName || ''}`.trim(), 
          email: user?.email || '', 
          feedback: '' 
        }); // Clear form
        setRating(0); // Reset rating
      } else {
        setMessage(result.message || 'Something went wrong. Please try again.'); // Set error message
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred while sending your feedback.'); // Set error message
    }
  };

  // Function to render the star rating
  const renderStars = () => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? 'filled' : ''}`}
        onClick={() => setRating(index + 1)} // Set rating on click
      >
        ★
      </span>
    ));
  };

  return (
    <div className="feedback-container">
      <h1 className='feed'>Feedback</h1>
      <p className='p'>We value your feedback. Let us know your thoughts about our services or products!</p>

      {!user ? ( // Display login prompt if user is not logged in
        <p className="login-message">Please log in to provide feedback.</p>
      ) : ( // Show feedback form if user is logged in
        <form className="feedback-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            readOnly // Make the field read-only if you don't want the user to change the auto-populated value
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            readOnly // Make the field read-only if you don't want the user to change the auto-populated value
          />

          <label htmlFor="rating">Rating</label>
          <div className="star-rating">
            {renderStars()} {/* Render stars for rating */}
          </div>

          <label htmlFor="feedback">Feedback</label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn">Send Feedback</button>
        </form>
      )}

      {/* Message display area */}
      {message && <p className="feedback-message">{message}</p>}
    </div>
  );
};

export default Feedback;
