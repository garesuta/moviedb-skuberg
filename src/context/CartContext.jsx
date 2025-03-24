import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  // Calculate the total quantity of items in the cart
  const cartQuantity = cartItem.reduce(
    (total, item) => total + item.quantity,
    0
  );

  function getItemQuantity(id) {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  }

  // Function to handle adding a movie to the cart
  const addToCart = (movie) => {
    setCartItem((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === movie.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === movie.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...movie, quantity: 1 }];
      }
    });
  };

  // Function to handle removing a movie from the cart
  const removeFromCart = (movieId) => {
    setCartItem((prevCart) => prevCart.filter((movie) => movie.id !== movieId));
  };

  // Function to handle decreasing the quantity of a movie in the cart
  const decreaseFromCart = (movieId) => {
    setCartItem((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === movieId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.id === movieId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCart.filter((item) => item.id !== movieId);
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        cartQuantity,
        getItemQuantity,
        addToCart,
        removeFromCart,
        decreaseFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
