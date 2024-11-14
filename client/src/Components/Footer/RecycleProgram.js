import React from 'react';
import './RecycleProgram.css';  // Importing the CSS file

const RecycleProgram = () => {
  return (
    <div className="recycle-container">
      <h1 className="recycle-title">RECYCLE PROGRAM</h1>
      
      <div className="recycle-content">
        {/* Left Section: Recycle Icon */}
        <div className="recycle-icon">
          <img 
            src="/images/re.png" 
            alt="Recycle Icon"
          />
        </div>

        {/* Right Section: Information */}
        <div className="recycle-info">
          <p className='p'> 
            Our Sustainability program provides a convenient way to the Urban Comfort consumer 
            to dispose of their Urban Comfort products and appliances when they reach their end-of-life. 
            The consumer deposits the Plastic as well as the E-waste at any of the 
            <a href="https://www.Urban Comfort.com" target="_blank" rel="noopener noreferrer"> Urban Comfort stores </a> 
            in the Waste collection bins provided or can call Service Centre at 
            <strong> 1800 1200 72659 (Toll-Free)</strong> from 8 am to 10 pm or visit this weblink 
            <a href="https://www.Urban Comfort.com" target="_blank" rel="noopener noreferrer"> Link</a> 
            to know the nearest collection centre where they can drop off the Plastic Waste or the Electronic waste.
          </p>
          
          <div className="recycle-collection">
            <p className="collection-title">Collection Centers</p>
            <a href="path_to_pdf_file" download className="pdf-link">
              Open PDF (233.98 KB)
            </a>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>Product guides &gt; Sustainability products &gt; </span>
        <span className="breadcrumb-highlight">RECYCLE PROGRAM</span>
      </div>
    </div>
  );
}

export default RecycleProgram;
