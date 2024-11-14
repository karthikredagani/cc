import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Login/AuthContext'; // Adjust the path as needed
import './Contactus.css'; // Assuming you have a CSS file for styling

const ContactUs = () => {
  const { user, userDetails } = useContext(AuthContext); // Access user and userDetails from AuthContext

  const email = 'support@example.com'; // Replace with your support email
  const phoneNumber = '9381943153'; // Replace with your support phone number
  const whatsappMessage = 'Hello! I need some assistance.'; // Default WhatsApp message

  const [formData, setFormData] = useState({
    name: `${userDetails.firstName || ''} ${userDetails.lastName || ''}`.trim(),
    email: user?.email || '',
    message: '',
  });

  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    // Update form data when userDetails change
    if (userDetails.firstName || userDetails.lastName || user?.email) {
      setFormData({
        name: `${userDetails.firstName || ''} ${userDetails.lastName || ''}`.trim(),
        email: user?.email || '',
        message: '',
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
    
    if (!user) {
      setFeedbackMessage('Please log in to send a message.'); // Show login message if user is not logged in
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (response.ok) {
        setFeedbackMessage('Message sent successfully!');
        setFormData({ 
          name: `${userDetails.firstName || ''} ${userDetails.lastName || ''}`.trim(),
          email: user?.email || '',
          message: '',
        });
      } else {
        setFeedbackMessage(result.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error:', error);
      setFeedbackMessage('An error occurred while sending your message.');
    }
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>

      {user ? (
        <>
          <div className="contact-info">
            <div className="contact-card">
              <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Email Icon" />
              <h5>Email</h5>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div className="contact-card">
              <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Phone Icon" />
              <h5>Phone</h5>
              <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            </div>
            <div className="contact-card">
              <img src="/images/Whatsapp.png" alt="WhatsApp Icon" />
              <h5>WhatsApp</h5>
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <h2 className='sa'>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name" className='lab'>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                readOnly
              />
            </div>

            <div className="input-group">
              <label htmlFor="email" className='lab'>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                readOnly
              />
            </div>

            <div className="input-group">
              <label htmlFor="message" className='lab'>Message</label>
              <input
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className='msg' type="submit">Send Message</button>
          </form>
        </>
      ) : (
        <p>Please log in to send a message.</p>
      )}

      {feedbackMessage && <p className="feedback-message">{feedbackMessage}</p>}
    </div>
  );
};

export default ContactUs;
