import React from 'react';
import './Nopage.css'; // Add styles for the NotFound page

const Nopage = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="home-link">Go Back to Homepage</a>
    </div>
  );
};

export default Nopage;
