import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import '../styles/ProductList.css';

// Sample product data
const products = [
  { id: 1, nameKey: 'floral_dress', price: '$49.99', image: 'https://images.beautifulhalo.com/images/392x588/201501/R/black-background-white-flower-print-crossback-short-sleeve-round-neck-dress_1421669707688.jpg' },
  { id: 2, nameKey: 'summer_top', price: '$29.99', image: 'https://avatars.mds.yandex.net/i?id=428dc1d9f391b888975afaee6be78d7f_l-4865612-images-thumbs&n=13' },
  { id: 3, nameKey: 'jeans', price: '$39.99', image: 'https://avatars.mds.yandex.net/i?id=dd9f3dc09ab04cc83bc0e9b402354bc217076921-9212707-images-thumbs&n=13' },
  { id: 4, nameKey: 'leather_bag', price: '$79.99', image: 'https://avatars.mds.yandex.net/i?id=d7d0fd3593e468b7246c6685243f51f4_l-5210381-images-thumbs&n=13' },
  { id: 5, nameKey: 'sneakers', price: '$59.99', image: 'https://i.pinimg.com/736x/2a/22/78/2a22786c7f877e26ba5f745c901a8575.jpg' },
  { id: 6, nameKey: 'jacket', price: '$89.99', image: 'https://cdn1.ozone.ru/s3/multimedia-8/c600/6765228116.jpg' },
  { id: 7, nameKey: 'women_bag', price: '$50.99', image: 'https://www.dhresource.com/f2/albu/g22/M01/D1/51/rBVaE2L2dJOAa7iEAARoj-AWf7c383.jpg' },
  { id: 8, nameKey: 'dress', price: '$69.99', image: 'https://cdn1.ozone.ru/s3/multimedia-t/6853376513.jpg' },
  { id: 9, nameKey: 'evening_dress', price: '$89.99', image: 'https://avatars.mds.yandex.net/i?id=41b899d23569c1db08f78f8ad452d63c_l-5232369-images-thumbs&n=13' }
];

const ProductList = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter(product =>
    t(`products.${product.nameKey}`).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      <h1>{t('our_products')}</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder={t('search_placeholder')}
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={t(`products.${product.nameKey}`)} className="product-image" />
            <div className="product-info">
              <h2 className="product-name">{t(`products.${product.nameKey}`)}</h2>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart-btn">{t('add_to_cart')}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
