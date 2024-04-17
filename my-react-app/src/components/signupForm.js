// SignupForm.js
import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const SignupForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
    } else {
      // Send paymentMethod.id to your server
      console.log('Payment method created:', paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" required />
      <label>Credit or debit card:</label>
      <CardElement />
      <button type="submit" disabled={!stripe}>Sign Up</button>
      {error && <div role="alert">{error}</div>}
    </form>
  );
};

export default SignupForm;
