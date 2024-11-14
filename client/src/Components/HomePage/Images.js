import React from 'react';
import Promotion from './Promotion';
import Grid from './Grid';
import './Images.css';

const Images = () => {
  // Sample product data
  const products = [
    { id: 1, name: "BRIMNES", description: "3-seat sofa with longue", oldPrice: "Rs.44,990", price: "Rs.29,990", image: "/images/poster2.jpg" },
    { id: 2, name: "RAFFELBJORK", description: "Corner sofa-bed", oldPrice: "Rs.32,290", price: "Rs.26,999", image: "/images/poster3.jpg" },
    { id: 3, name: "JAMLIK", description: "Scented candle in glass", oldPrice: "Rs.45,999", price: "Rs.35,999", image: "/images/poster4.jpg" },
    { id: 4, name: "ORMARYD", description: "Additional Product", oldPrice: "Rs.43,999", price: "Rs.33,499", image: "/images/poster5.jpg" },
  ];

  return (
    <div className="app-container">
      <Promotion />
      <Grid products={products} />
    </div>
  );
};

export default Images;
