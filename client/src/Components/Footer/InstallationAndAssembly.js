import React from 'react';
import './Installation.css';

const InstallationAndAssembly = () => {
  return (
    <div className="footer-section">
      <h4 style={{ color: 'blue', textDecoration: 'underline' }}>
        Installation & Assembly
      </h4>
      <div className="installation-details">
        <div className="details-and-images">
          <div className="text-details">
            <p className='p'>
              Our furniture shop provides professional installation and assembly services to make your setup effortless. Our team ensures that your furniture is assembled and installed correctly, giving you peace of mind.
            </p>
            <p className='p'>
              Installation services include:
              <ul>
                <li>Bedroom set installation</li>
                <li>Living room combo assembly</li>
                <li>Wardrobe and storage setup</li>
                <li>Office furniture arrangement</li>
              </ul>
            </p>
            <p className='p'>
              Our assembly services ensure that all pieces are put together accurately, providing a sturdy and lasting setup for your furniture. We handle all types of furniture, ensuring the right parts fit together seamlessly.
            </p>
            <p className='p'>
              Assembly services include:
              <ul>
                <li>Pre-assembled furniture adjustments</li>
                <li>Complex wardrobe and cabinet assembly</li>
                <li>Custom shelving and storage units</li>
                <li>Reassembly of furniture during relocation</li>
              </ul>
            </p>
            <p className='p'>
              For more information or to schedule an appointment, please contact our support team.
            </p>
          </div>
          <div className="images">
            <img
              src="/images/S3.jpg"
              alt="Bedroom Set Installation"
              className="image"
            />
            <img
              src="images/S4.jpg"
              alt="Living Room Assembly"
              className="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationAndAssembly;