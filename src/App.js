import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import About from './components/About';
import { CartProvider } from './components/CartContext'; // Wrap your app with CartProvider
import './i18n'; // Internationalization
import './styles/App.css'; // App styles

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
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
