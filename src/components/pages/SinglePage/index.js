import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './../../core/cart-state/actions';
import './style.css';

const ShoeDetails = ({ }) => {

  const { id } = useParams();

  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariation, setSelectedVariation] = useState(undefined);
  const [selectedColor, setSelectedColor] = useState(undefined);
  const [selectedSize, setSelectedSize] = useState(undefined);

  useEffect(() => {
    const getShoeDetails = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://192.168.68.127:8080/products/${id}`);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`);
        }
        const data = await response.json();
        setData(data);

        if (data.variations.length > 0) {
          setSelectedVariation(data.variations[0]);
        }
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


  const handleSizeSelected = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleColorSelected = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleSelectVariation = (event) => {
    const variation = data.variations.filter((e) => e.material == event.target.value)[0];
    setSelectedVariation(variation);
  }

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const product = {
      shoe: data,
      variation: {
        material: selectedVariation.material,
        color: selectedColor,
        size: selectedSize
      }
    } 
    dispatch(addToCart(product));
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
            <p>Unit Price: ${selectedVariation?.price }</p>
            <div className="options">

              <select value={selectedVariation?.material} onChange={handleSelectVariation}>

                {data.variations.map((option) => (
                  <option key={option.material} value={option.material}>
                    {option.material}
                  </option>
                ))}

              </select>



              {/* Selected variation */}

              {
                selectedVariation == undefined ? (
                  <div></div>
                ) : (
                  <div>
                    <select value={selectedColor} onChange={handleColorSelected}>

                      {selectedVariation.colors.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}

                    </select>

                    <br />

                    <select value={selectedSize} onChange={handleSizeSelected}>

                      {selectedVariation.sizes.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}

                    </select>
                  </div>
                )
              }




            </div>

            <div className="quantity-wrapper">
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <p>Total Price: ${selectedVariation?.price * quantity}</p>
            <br />
              <button className="add-to-cart-button">Add to Cart</button>
              <br />
            <Link to="/cart">
              <p>Go to cart</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoeDetails;
