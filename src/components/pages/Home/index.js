import React, { useState, useEffect } from "react";
import './style.css';
import { Link } from "react-router-dom";

const HomePage = () => {
  const [textIndex, setTextIndex] = useState(0);
  const textOptions = ["Step", "Into Style"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 2500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getShoes = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://192.168.68.127:8080/products');
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`);
        }
        const data = await response.json();
        setData(data.content);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    getShoes();
  }, []);
  


  return (
    <><div className="home-section" data-testid="home-section" id="Home">
      <div className="text">
        <h1 className="slideshow-text" data-testid="slideshow-text">
          {textOptions[textIndex]}
        </h1>
      </div>
      <button className="learn-more-button">
        <span className="learn-more-text">Learn More</span>
      </button>
    </div><div className="shoe-container">
        {data.map((shoe) => (
          <div className="shoe" key={shoe.id}>
            {}
            <Link to={`/shoes/${shoe.id}`} className="shoe-link">
              <img src={shoe.image} alt={shoe.name} />
              <div className="shoe-info">
                <h2>{shoe.name}</h2>
                <p>{shoe.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div></>
    
  );
};

export default HomePage;