import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';
import { Link } from 'react-router-dom'; // Added useLocation

export default function Footer() {
  return (
    <>
      <hr />
      <div className="Footer-container">
        <div className="uc">
          <img src="/images/logo4.png" alt="MyApp Logo" />
          <p>
            UC is among the World's Largest
            <br />
            Furniture Manufacturers offering a
            <br />
            diverse range of modern and
            <br />
            traditional furniture.
            <br />
            It has achieved a rapid success
            <br />
            and has expanded in South Asia.
            <br />
            UC success has grown from its
            <br />
            ability to produce high quality
            <br />
            furniture at affordable prices
            <br />
            with outstanding customer service.
          </p>
        </div>

        {/* Flexbox for Services, Help, and About sections next to the logo */}
        <div className="footer-links">
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li>Interior Design</li>
              <li><Link to='/installationandassembly' className="face">Installation and Assembly</Link></li>
              <li>Maintenance</li>
              <li><Link to='/movingfurniture' className="face">Moving of Furniture</Link></li>
              <li>Support and Service</li>
              <li><Link to='/recycling' className="face">Recycling of old furniture</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Help</h3>
            <ul>
            <li><Link to="/faqs" className="face">FAQs</Link></li>
            <li><Link to='/contactus' className="face">Contact us</Link></li>
              <li><Link to='/return' className="face">Return</Link></li>
              <li><Link to="/feedback" className="face">Feedback</Link></li>
              <li><Link to='/termsandcondition' className="face">Terms and conditions</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>About us</h3>
            <ul>
            <li><Link to="/urban-comfort" className="face">Urban Comfort Furniture</Link></li>
            <li><Link to="/manufacturer" className="face">Manufacturing Unit</Link></li>
              <li>Urban Comfort 207, Sikh road</li>
              <li>Secunderabad - 500003.</li>
              <li>Phone: 040-01234567</li>
              <li>Email: urbancomfort@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div className="Sm">Follow Us</div>
        <div className="social-media">
          <a href="https://facebook.com" className="face" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" className="twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" className="instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://youtube.com" className="youtube" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://linkedin.com" className="linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          {/* <a href="https://whatsapp.com" className="whatsapp" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a> */}
        </div>
      </div>
      <div className="Footer-bottom">
        <div>© 2024 Urban Comfort. All rights reserved.</div>
      </div>
    </>
  );
}
