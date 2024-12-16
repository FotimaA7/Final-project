import React from 'react';
import '../styles/Contact.css'; // Ensure you have a CSS file for styles or adjust the path as needed.

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Feel free to reach out with any questions, concerns, or feedback.</p>

      <h2>Our Contact Details</h2>
      <ul>
        <li><strong>Email:</strong> support@bynanish.com</li>
        <li><strong>Phone:</strong> +1 234 567 890</li>
        <li><strong>Address:</strong> 123 Fashion Street, Style City, CA 90210</li>
      </ul>

      <h2>Business Hours</h2>
      <ul>
        <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
        <li>Saturday: 10:00 AM - 6:00 PM</li>
        <li>Sunday: Closed</li>
      </ul>

      <h2>Follow Us</h2>
      <p>Stay connected with us on social media:</p>
      <ul className="social-links">
        <li><a href="https://facebook.com/bynanish" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://instagram.com/bynanish" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://twitter.com/bynanish" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://pinterest.com/bynanish" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
      </ul>

      <h2>Send Us a Message</h2>
      <form className="contact-form">
        <label>
          Your Name:
          <input type="text" placeholder="Enter your name" />
        </label>
        <label>
          Email Address:
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          Message:
          <textarea placeholder="Write your message here"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
