import React from 'react';
import '../styles/Payment.css'; // Optional: Create styling for this page

const Payment = () => {
  return (
    <div className="payment-container">
      <h1>Bank Account Details</h1>
      <p>Please use the following bank account details to complete your payment:</p>
      <div className="bank-details">
        <p><strong>Bank Name:</strong> XYZ Bank</p>
        <p><strong>Account Number:</strong> 1234567890</p>
        <p><strong>Account Holder:</strong> Little Lemon Shop</p>
        <p><strong>IBAN:</strong> XYZ123456789</p>
        <p><strong>SWIFT Code:</strong> ABCD1234</p>
      </div>
      <p>After completing the payment, please contact us with your order details.</p>
    </div>
  );
};

export default Payment;
