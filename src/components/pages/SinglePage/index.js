import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import './style.css';

const ShoeDetails = ({ shoe }) => {

  const { id } = useParams();

  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [vars, setVars] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    const getShoeDetails = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:8080/products/${id}`);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
        setVars(data.variations); 
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getShoeDetails();
  }, [id]);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleMaterialClick = (material) => {
    setSelectedMaterial(material);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="shoe-details-container">
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : data && (
        <div className="details-wrapper">
          <div className="image-wrapper">
            <img src={data.image} alt={data.name} />
          </div>
          <div className="info-wrapper">
            <h1>{data.name}</h1>
            <p>Unit Price: $20</p>
            <div className="options">
  {vars.map((variation, index) => (
    <React.Fragment key={index}>
      <button onClick={() => handleMaterialClick(variation.material)}>{variation.material}</button>
    
      {variation.sizes && variation.sizes.length > 0 &&
        <button onClick={() => handleSizeClick(variation.sizes[0])}>{variation.sizes[0]}</button>
      }
    
      {variation.colors && variation.colors.length > 0 &&
        <button onClick={() => handleColorClick(variation.colors[0])}>{variation.colors[0]}</button>
      }
    </React.Fragment>
  ))}
</div>

            <div className="quantity-wrapper">
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <p>Total Price: ${20 * quantity}</p>
            <Link to="/cart">
              <button className="add-to-cart-button">Add to Cart</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoeDetails;
