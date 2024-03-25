import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './style.css'; 

const Cart = () => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = () => {
    const newItem = {
      id: items.length + 1,
      name: `Item ${items.length + 1}`,
      price: 10
    };
    setItems([...items, newItem]);
    setTotalPrice(totalPrice + newItem.price); 
  };

  const removeItemFromCart = (itemId) => {
    const updatedItems = items.filter(item => item.id !== itemId);
    const removedItem = items.find(item => item.id === itemId);
    if (removedItem) {
      setItems(updatedItems);
      setTotalPrice(totalPrice - removedItem.price); 
    }
  };

  return (
    <div className="cart-container">
      <div className="items-container">
        <h2>Selected Items</h2>
        {items.length > 0 ? (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
                <button onClick={() => removeItemFromCart(item.id)}>-</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items selected</p>
        )}
      </div>
      <div className="checkout-details">
        <h2>Checkout Details</h2>
        <p>Total Items: {items.length}</p>
        <p>Total Price: ${totalPrice}</p>
        <Link to="/payment">
          <button>Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
