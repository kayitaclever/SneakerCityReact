import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './style.css'; 

const DeliveryPage = () => {
 
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Delivery Details:");
    console.log("Full Name:", fullName);
    console.log("Address:", address);
    console.log("City:", city);
    console.log("Postal Code:", postalCode);
   
  };

  return (
    <div className="delivery-container">
      <h1>Delivery Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code:</label>
          <input
            type="text"
            id="postalCode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </div>
        <button type="submit">Proceed to Payment</button>
      </form>
      <p>
        <Link to="/cart">Back to Cart</Link>
      </p>
    </div>
  );
};

export default DeliveryPage;
