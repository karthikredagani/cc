import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Chatbox.css'; // Import your custom styles

const Chatbox = () => {
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showCancelOptions, setShowCancelOptions] = useState(false);

  const faqData = [
    {
      question: 'What types of furniture do you offer?',
      answer: 'We offer a wide range of furniture including sofas, beds, dining tables, and office furniture.'
    },
    {
      question: 'Do you offer delivery services?',
      answer: 'Yes, we provide delivery services across multiple locations. Delivery charges may apply depending on your location.'
    },
    {
      question: 'Can I customize my furniture?',
      answer: 'Absolutely! We offer customization services to fit your specific needs and preferences.'
    },
    {
      question: 'What is the return policy?',
      answer: 'You can return the furniture within 30 days of delivery if it meets our return policy conditions.'
    },
    {
      question: 'Do you offer warranty on furniture?',
      answer: 'Yes, all our furniture comes with a 1-year warranty covering manufacturing defects.'
    },
    // Add more questions as needed...
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const startChat = () => {
    setIsChatStarted(true); // Start the chat and show the FAQ
  };

  const handleCancel = () => {
    setIsChatStarted(false); // Close the chat when clicking "X"
  };

  const handleEndChat = () => {
    setIsChatStarted(false); // End the chat
    setShowCancelOptions(false); // Hide the cancel options
  };

  const handleContinueChat = () => {
    setShowCancelOptions(false); // Hide the cancel options and continue the chat
  };

  return (
    <div className="chatbox-container">
      {/* Start Chat Button */}
      {!isChatStarted && (
        <div className="start-chat-button" onClick={startChat}>
          <i className="fa fa-comment-alt" style={{ fontSize: '2rem' }}></i> {/* Font Awesome icon */}
        </div>
      )}

      {/* Chatbox content, visible only after Start Chat button is clicked */}
      {isChatStarted && (
        <div className="chatbox">
          <div className="chat-header">
            <span className="chat-title">Help!</span>
            <button className="cancel-button" onClick={handleCancel}>
              <i className="fas fa-times"></i> {/* Font Awesome 'X' icon */}
            </button>
          </div>

          {showCancelOptions ? (
            <div className="cancel-options">
              <button className="end-chat" onClick={handleEndChat}>End Chat</button>
              <button className="continue-chat" onClick={handleContinueChat}>Continue Chat</button>
            </div>
          ) : (
            <div className="faq-questions">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h4 className="faq-question">{item.question}</h4>
                  {activeIndex === index && <p className="faq-answer">{item.answer}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbox;