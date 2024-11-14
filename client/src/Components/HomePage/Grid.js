import React from 'react';
import './Grid.css';

const Grid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card2" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image1" />
          <h3 className="product-name1">{product.name}</h3>
          <p className="product-description1">{product.description}</p>
          <p className="product-price1">
            <del>{product.oldPrice}</del> {product.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Grid;
