import React, { useState } from "react";
import "./Recliners.css"; // Add your styles here

const Recliner = () => {
  // Set a default image on initialization
  const [selectedImage, setSelectedImage] = useState("/images/pro1.jpg");
  const [quantity, setQuantity] = useState(1);

  const images = [
    "/images/pro1.jpg",
    "/images/pro2.jpg",
    "/images/pro3.jpg",
    "/images/pro4.jpg",
  ];

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="container2">
      <div className="image-column">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="thumbnail"
            onClick={() => handleClick(image)}
          />
        ))}
      </div>
      <div className="image-details-container">
        <div className="image-wrapper">
          <img src={selectedImage} alt="Selected" className="large-image" />
        </div>
        <div className="details">
          <h2 className="title">Luxury Bedrooms</h2>
          <p className="model">Model: Modern RRR Bedrooms</p>
          <h3 className="price">Price: Rs. 19,999.00</h3>
          <p className="stock">
            Stock: <span>In stock</span>
          </p>

          <div className="selector">
            <button onClick={handleDecrease}>-</button>
            <input type="text" value={quantity} readOnly />
            <button onClick={handleIncrease}>+</button>
          </div>

          <div className="button-container">
            <button className="add-to-cart-button">Add to Cart</button>
            <br />
            <br />
            <button className="buy-now-button">Buy it now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recliner;
