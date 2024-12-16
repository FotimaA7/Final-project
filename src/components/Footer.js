import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import '../styles/Footer.css';

const Footer = () => {
  const { t } = useTranslation(); // Initialize translation hook

  const address = "Dushanbe, Tajikistan";
  const phone = "+992931044939"; // Your phone number

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>{t('footer_message')}</p>
        </div>

        <div className="footer-links">
          <div className="footer-address">
            <p>
              <strong>{t('address')}: </strong>
              <a
                href={`https://yandex.com/maps/10318/dushanbe/?ll=68.779719%2C38.576274&z=12`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {address}
              </a>
            </p>
          </div>

          <div className="footer-phone">
            <p>
              <strong>{t('phone')}: </strong>
              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
