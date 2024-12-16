import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importing useTranslation hook
import LanguageSwitcher from './LanguageSwitcher'; // Import LanguageSwitcher component
import '../styles/Navbar.css'; // Importing Navbar styles

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation(); // Getting translation function

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logos = {
    home: 'https://s3ord.edusite.ru/boyko/img/logo2.png',
    products: 'https://static.insales-cdn.com/images/collections/1/3903/93482815/275859.png',
    cart: 'https://i.pinimg.com/originals/79/4e/0c/794e0c52876c67c29355058dc08269e6.png',
    about: 'https://cdn0.iconfinder.com/data/icons/vector-huge-black-icons/16/info-1024.png',
    contact: 'https://media.baamboozle.com/uploads/images/115676/1616415669_22804_url.png',
  };

  return (
    <nav className="navbar" style={{ backgroundColor: '#b59e7c' }}>
      <div className="navbar-logo">
        <span>BYNANISH</span>
        <img
          src="https://static.tildacdn.com/tild3762-6331-4935-a530-653733363836/820854455c5193c21f1e.png"
          alt="BYNANISH Logo"
          className="brand-logo"
        />
      </div>

      {/* Navbar Links */}
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/">
            {t('home')} <img src={logos.home} alt="Home Logo" className="link-logo" />
          </Link>
        </li>
        <li>
          <Link to="/products">
            {t('products')} <img src={logos.products} alt="Products Logo" className="link-logo" />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            {t('cart')} <img src={logos.cart} alt="Cart Logo" className="link-logo" />
          </Link>
        </li>
        <li>
          <Link to="/about">
            {t('about')} <img src={logos.about} alt="About Logo" className="link-logo" />
          </Link>
        </li>
        <li>
          <Link to="/contact">
            {t('contact')} <img src={logos.contact} alt="Contact Logo" className="link-logo" />
          </Link>
        </li>
      </ul>

      {/* Language Switcher */}
      <LanguageSwitcher />

      {/* Hamburger Menu */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar-menu">
          <Link to="/">
            {t('home')} <img src={logos.home} alt="Home Logo" className="link-logo" />
          </Link>
          <Link to="/products">
            {t('products')} <img src={logos.products} alt="Products Logo" className="link-logo" />
          </Link>
          <Link to="/cart">
            {t('cart')} <img src={logos.cart} alt="Cart Logo" className="link-logo" />
          </Link>
          <Link to="/about">
            {t('about')} <img src={logos.about} alt="About Logo" className="link-logo" />
          </Link>
          <Link to="/contact">
            {t('contact')} <img src={logos.contact} alt="Contact Logo" className="link-logo" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
