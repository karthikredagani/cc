import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
  return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, { ...product, quantity: 1 }]);
  };

  const removeFromWishlist = (productName) => {
    setWishlist((prevWishlist) => prevWishlist.filter(product => product.name !== productName));
  };

  const updateWishlistQuantity = (productName, newQuantity) => {
    setWishlist((prevWishlist) =>
      prevWishlist.map((product) =>
        product.name === productName ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, updateWishlistQuantity }}>
      {children}
    </WishlistContext.Provider>
  );
};
