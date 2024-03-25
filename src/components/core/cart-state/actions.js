import React from "react";

// actions.js
export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: "REMOVE_FROM_CART",
  payload: { id: productId }, // Send only the product ID for filtering
});