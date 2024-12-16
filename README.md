# Online Shop Website

## Project Overview

The **Online Shop Website** is a dynamic and responsive e-commerce platform designed for seamless online shopping experiences. Built with **React**, the site allows users to browse a curated collection of products, add them to their cart, and complete the purchase through a secure checkout process. The platform features real-time cart updates, multilingual support, and efficient state management via the **React Context API**.

## Key Features

### 1. **Product Listings**

- Grid display of products with images, names, and prices.
- Search functionality to filter products by keyword.
- Multilingual support with **react-i18next** for a personalized user experience.

### 2. **Shopping Cart**

- Add, remove, and view items in the cart in real-time.
- Automatic cart updates as items are added or removed.
- Display of total cart value.

### 3. **Checkout and Payment**

- Navigate to a secure checkout page to complete the purchase.
- Simulated payment process for user input of bank details.

### 4. **Responsive Design**

- Optimized for mobile, tablet, and desktop devices to ensure accessibility across platforms.

### 5. **Interactive Address and Phone Links**

- **Address Link**: Clicking on the address will open a map and show the exact location.
- **Phone Number Link**: Clicking on the phone number will open WhatsApp for direct communication.

## Technologies Used

- **React**: Frontend framework for building responsive and interactive user interfaces.
- **React Context API**: State management solution for handling cart functionality across components.
- **React Router**: Provides navigation between pages such as Home, Cart, and Checkout.
- **react-i18next**: Localization library to support multiple languages.
- **CSS Modules**: For scoped component styling.
- **Webpack**: Optimizes assets for production use.
- **JavaScript (ES6+)**: Core logic implementation.

## Installation and Setup

To set up the project on your local machine, follow these steps:

### Clone the Repository

```bash
git clone https://github.com/yourusername/online-shop.git
cd online-shop
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm start
```

The website will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

The production build will be located in the `build/` directory.

## File Structure

```bash
src/
|-- components/
|   |-- About.js                # About page content
|   |-- Cart.js                 # Cart page logic and UI
|   |-- CartContext.js          # Context API for cart state management
|   |-- Contact.js              # Contact page content
|   |-- Footer.js               # Footer component
|   |-- Home.js                 # Home page displaying products
|   |-- LanguageSwitcher.js     # Language switcher component
|   |-- Navbar.js               # Navbar with navigation links
|   |-- ProductCard.js          # Individual product card component
|   |-- ProductDetail.js        # Detailed view of individual products
|   |-- ProductList.js          # List of products displayed on the homepage
|-- styles/
|   |-- About.css               # Styles for About component
|   |-- App.css                 # Global styles
|   |-- Cart.css                # Styles for Cart component
|   |-- Contact.css             # Styles for Contact component
|   |-- Footer.css              # Styles for Footer component
|   |-- LanguageSwitcher.css    # Styles for LanguageSwitcher component
|   |-- Navbar.css              # Styles for Navbar component
|   |-- ProductCard.css         # Styles for ProductCard component
|   |-- ProductList.css         # Styles for ProductList component
|-- App.js                      # Main application entry point
|-- App.test.js                 # Unit tests for App component
|-- i18n.js                     # i18n configuration for multilingual support
|-- index.js                    # ReactDOM rendering
|-- index.css                   # Global CSS
|-- reportWebVitals.js          # Web vitals for performance measurement
|-- setupTests.js               # Setup for running tests
.gitignore
package-lock.json
package.json
README.md
```

## How to Use

### Browsing Products

- Open the application in your browser.
- Use the search bar to find specific products or scroll through the product grid.
- Click the "Add to Cart" button to add items to your shopping cart.

### Viewing Cart

- Navigate to the cart page.
- View the contents of your cart, including the list of items and their prices.
- Remove items from the cart if needed.

### Checkout

- On the cart page, click "Buy" to proceed to checkout.
- Enter payment details (simulated for testing purposes).
- Complete the simulated payment process.

### Interactive Address and Phone Links

- **Address**: Clicking on the address in the Contact section will open a map to display the location.
- **Phone Number**: Clicking on the phone number will redirect you to WhatsApp to start a chat.

## Future Enhancements

- **Real Payment Integration**: Integrate with real payment gateways like **Stripe** or **PayPal** for secure transactions.
- **User Authentication**: Enable user login and authentication to save cart items and order history.
- **Backend API**: Develop a backend API to fetch products dynamically and handle order management.
- **Admin Dashboard**: Create an admin interface to manage product inventory and orders.

## Contributing

Feel free to fork the repository and submit pull requests for any bug fixes, feature additions, or improvements. Please ensure that you follow proper coding standards and include tests where applicable.

## License

This project is licensed under the **MIT License**. See the LICENSE file for more details.

## Screenshots

- **Home Page**: Displays product listings with images and pricing.
- **Cart Page**: Shows the items in the cart and the total price.
- **Checkout Page**: Payment form for simulating the payment process.

(Include relevant screenshots in the `images/` folder and reference them here)
