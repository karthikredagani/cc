import React from 'react';
import './Whatsapp.css'; // Create custom CSS if needed for styling

const WhatsappButton = () => {
  const phoneNumber = '9'; // Replace with your WhatsApp number
  const message = 'Hello! I need some assistance.'; // Default message

  return (
    <div className="whatsapp-button">
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/Whatsapp.png" alt="WhatsApp Chat" />
      </a>
    </div>
  );
};

export default WhatsappButton;