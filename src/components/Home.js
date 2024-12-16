import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-banner">
        <h1>Discover Fashion You'll Love</h1>
        <p>Shop the latest trends in women's clothing.</p>
        <Link to="/products">
          <button className="shop-now-btn">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
