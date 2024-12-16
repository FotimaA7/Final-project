import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import About from './components/About';
import Payment from './components/Payment';  // Payment component
import { CartProvider } from './components/CartContext';
import './styles/App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment" element={<Payment />} /> {/* Use Payment here */}
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
