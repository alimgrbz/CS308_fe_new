import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Experience Coffee in Every Sip</h1>
            <p>Artisanal coffee roasted to perfection, delivered to your doorstep.</p>
            <div className="hero-buttons">
              <Link to="/products" className="button">Shop Now</Link>
              <Link to="/about" className="button secondary">Our Story</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="categories-grid">
            <Link to="/products/coffee-beans" className="category-card">
              <div className="category-name">
                <h3>Coffee Beans</h3>
              </div>
            </Link>
            <Link to="/products/brewing-equipment" className="category-card">
              <div className="category-name">
                <h3>Brewing Equipment</h3>
              </div>
            </Link>
            <Link to="/products/accessories" className="category-card">
              <div className="category-name">
                <h3>Accessories</h3>
              </div>
            </Link>
            <Link to="/products/gifts" className="category-card">
              <div className="category-name">
                <h3>Gift Sets</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
