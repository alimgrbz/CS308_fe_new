
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../styles/HomePage.css';

// Sample featured products - replace with actual data in a real app
const featuredProducts = [
  {
    id: 1,
    name: 'Sumatra Dark Roast',
    price: 16.99,
    image: '',
    description: 'Bold, earthy flavors with low acidity and a smooth finish.',
    inStock: true
  },
  {
    id: 2,
    name: 'Ethiopia Light Roast',
    price: 18.99,
    image: '',
    description: 'Bright and fruity with notes of blueberry and citrus.',
    inStock: true
  },
  {
    id: 3,
    name: 'Colombia Medium Roast',
    price: 15.99,
    image: '',
    description: 'Sweet caramel notes with a hint of nuttiness and cocoa.',
    inStock: false
  },
  {
    id: 4,
    name: 'Driftmood Espresso Blend',
    price: 17.99,
    image: '',
    description: 'Rich, full-bodied blend perfect for espresso machines.',
    inStock: true
  }
];

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

      <section className="featured-products-section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="view-all-link">
            <Link to="/products">View All Products</Link>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Passion for Coffee</h2>
              <p>At Driftmood Coffee, we believe that the perfect cup starts with the perfect bean. Our master roasters travel the world to find the highest quality, sustainably sourced coffee beans.</p>
              <p>Each small batch is carefully roasted to bring out the unique character and flavor profile, resulting in a coffee experience like no other.</p>
              <Link to="/about" className="button secondary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The Sumatra Dark Roast is absolutely incredible. Rich, complex flavor that makes my morning something to look forward to."</p>
                <div className="testimonial-author">- Sarah J.</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"I've tried coffee from all over, but Driftmood's Ethiopia Light Roast stands out. The fruity notes are so vibrant!"</p>
                <div className="testimonial-author">- Michael T.</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Their subscription service is a game-changer. Fresh coffee delivered right when I need it, and I've discovered so many new favorites."</p>
                <div className="testimonial-author">- Emma R.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="subscription-section">
        <div className="container">
          <div className="subscription-content">
            <h2>Never Run Out of Great Coffee</h2>
            <p>Join our subscription service and receive freshly roasted coffee at your doorstep as often as you'd like.</p>
            <Link to="/subscriptions" className="button">Start Your Subscription</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
