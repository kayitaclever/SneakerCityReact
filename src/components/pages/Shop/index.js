import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const shoes = [
  {
    id: "shoe1",
    name: "Running Shoe",
    description: "Comfortable and lightweight",
    imageSrc: process.env.PUBLIC_URL + '/images/c1.jpeg'
  },
  {
    id: "shoe2",
    name: "High Heels",
    description: "Elegant and stylish",
    imageSrc: process.env.PUBLIC_URL + '/images/shoe2.jpeg'
  },
  {
    id: "shoe1",
    name: "Running Shoe",
    description: "Comfortable and lightweight",
    imageSrc: process.env.PUBLIC_URL + '/images/shoe1.jpeg'
  },
  {
    id: "shoe1",
    name: "Running Shoe",
    description: "Comfortable and lightweight",
    imageSrc: process.env.PUBLIC_URL + '/images/c2.jpeg'
  },
  {
    id: "shoe1",
    name: "Running Shoe",
    description: "Comfortable and lightweight",
    imageSrc: process.env.PUBLIC_URL + '/images/shoe6.jpeg'
  },
  {
    id: "shoe1",
    name: "Running Shoe",
    description: "Comfortable and lightweight",
    imageSrc: process.env.PUBLIC_URL + '/images/5.jpeg'
  },
  {
    id: "shoe1",
    name: "Running Shoe",
    description: "Comfortable and lightweight",
    imageSrc: process.env.PUBLIC_URL + '/images/shoe4.jpeg'
  },
  {
    id: "shoe1",
    name: "Running Shoe",
    description: "Comfortable and lightweight",
    imageSrc: process.env.PUBLIC_URL + '/images/shoe3.jpeg'
  },
  {
    id: "shoe1",
    name: "Running Shoe",
    description: "Comfortable and lightweight",
    imageSrc: process.env.PUBLIC_URL + '/images/c3.jpeg'
  },
  {
    id: "shoe1",
    name: "Running Shoe",
    description: "Comfortable and lightweight",
    imageSrc: process.env.PUBLIC_URL + '/images/c4.jpeg'
  },
  {
    id: "shoe1",
    name: "Running Shoe",
    description: "Comfortable and lightweight",
    imageSrc: process.env.PUBLIC_URL + '/images/shoe7.jpeg'
  },
  {
    id: "shoe1",
    name: "Running Shoe",
    description: "Comfortable and lightweight",
    imageSrc: process.env.PUBLIC_URL + '/images/c5.jpeg'
  },
  {
    id: "shoe1",
    name: "Running Shoe",
    description: "Comfortable and lightweight",
    imageSrc: process.env.PUBLIC_URL + '/images/c7.jpeg'
  },
  {
    id: "shoe1",
    name: "Running Shoe",
    description: "Comfortable and lightweight",
    imageSrc: process.env.PUBLIC_URL + '/images/c1.jpeg'
  },
  {
    id: "shoe1",
    name: "Running Shoe",
    description: "Comfortable and lightweight",
    imageSrc: process.env.PUBLIC_URL + '/images/shoe6.jpeg'
  },
  {
    id: "shoe1",
    name: "Running Shoe",
    description: "Comfortable and lightweight",
    imageSrc: process.env.PUBLIC_URL + '/images/c2.jpeg'
  },
  {
    id: "shoe1",
    name: "Running Shoe",
    description: "Comfortable and lightweight",
    imageSrc: process.env.PUBLIC_URL + '/images/c8.jpeg'
  },
  {
    id: "shoe1",
    name: "Running Shoe",
    description: "Comfortable and lightweight",
    imageSrc: process.env.PUBLIC_URL + '/images/c6.jpeg'
  },
  
];

const Shop = () => {
  return (
    <>
     <>
      <h1 className="ourteam-heading" id="our-team-heading">Our Shoes</h1><br></br>
      <div className="shoe-container">
        {shoes.map((shoe) => (
          <div className="shoe" key={shoe.id}>
            {}
            <Link to={`/shoes/${shoe.id}`} className="shoe-link">
              <img src={shoe.imageSrc} alt={shoe.name} />
              <div className="shoe-info">
                <h2>{shoe.name}</h2>
                <p>{shoe.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
    </>
  );
};

export default Shop;