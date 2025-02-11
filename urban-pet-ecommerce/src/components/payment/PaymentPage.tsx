import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { PaymentForm } from "./PaymentForm";
import { OrderSummary } from "./OrderSummary";
import { SEO } from "../SEO";
// Replace with your Stripe publishable key
const stripePromise = loadStripe("your_publishable_key_here");
export const PaymentPage = () => {
  const [processing, setProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  // Mock order details - in a real app, this would come from your cart/order state
  const orderDetails = {
    items: [{
      id: 1,
      name: "Luxury Pet Bed",
      price: 79.99,
      quantity: 1
    }],
    subtotal: 79.99,
    shipping: 5.0,
    tax: 6.4,
    total: 91.39
  };
  return <>
      <SEO title="Secure Checkout" description="Complete your purchase securely with our encrypted payment processing" keywords="secure checkout, payment, stripe, pet supplies payment" />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-brown-800">
              Secure Checkout
            </h1>
            <p className="mt-2 text-brown-600">
              Complete your purchase securely
            </p>
          </div>
          {paymentSuccess ? <div className="max-w-md mx-auto bg-white rounded-lg shadow p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-brown-800 mb-2">
                Payment Successful!
              </h2>
              <p className="text-brown-600 mb-6">
                Thank you for your purchase. You will receive an email
                confirmation shortly.
              </p>
              <a href="/" className="inline-block bg-sienna-500 text-white px-6 py-3 rounded-lg hover:bg-sienna-600 transition-colors">
                Return to Home
              </a>
            </div> : <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="order-2 lg:order-1">
                <Elements stripe={stripePromise}>
                  <PaymentForm amount={orderDetails.total} processing={processing} setProcessing={setProcessing} error={paymentError} setError={setPaymentError} setSuccess={setPaymentSuccess} />
                </Elements>
              </div>
              <div className="order-1 lg:order-2">
                <OrderSummary order={orderDetails} />
              </div>
            </div>}
        </div>
      </div>
    </>;
};