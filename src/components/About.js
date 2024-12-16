import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Shop</h1>
      <p>Welcome to our shop! We offer the latest trends in fashion, from dresses to bags and shoes. Our goal is to provide you with the best products at affordable prices. We value customer satisfaction and work hard to bring you the best shopping experience.</p>

      <div className="about-content">
        <h2>Our Story</h2>
        <p>We started this shop with the vision of making fashion accessible to everyone. From small beginnings, we’ve grown to provide a wide variety of products for women of all ages. Our team is passionate about curating stylish and high-quality products for you.</p>
        
        <h2>Why Choose Us?</h2>
        <ul>
          <li>High-quality materials</li>
          <li>Affordable prices</li>
          <li>Excellent customer service</li>
          <li>Fast shipping</li>
          <li>Amazing deals and discounts</li>
        </ul>
        
        <h2>Our Values</h2>
        <p>We believe in offering more than just great products. Our shop is committed to:</p>
        <ul>
          <li>Ethical sourcing of materials</li>
          <li>Providing equal opportunities</li>
          <li>Encouraging sustainability in fashion</li>
        </ul>
        
        <h2>Contact Us</h2>
        <p>If you have any questions or suggestions, feel free to reach out to us. We are always here to help!</p>
      </div>
    </div>
  );
};

export default About;
