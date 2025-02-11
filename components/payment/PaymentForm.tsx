import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Loader } from "lucide-react";
interface PaymentFormProps {
  amount: number;
  processing: boolean;
  setProcessing: (processing: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
  setSuccess: (success: boolean) => void;
}
export const PaymentForm = ({
  amount,
  processing,
  setProcessing,
  error,
  setError,
  setSuccess
}: PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setProcessing(true);
    setError(null);
    try {
      // In a real application, you would create a payment intent on your server
      // and pass the client secret to the client
      const {
        error: stripeError,
        paymentMethod
      } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)!
      });
      if (stripeError) {
        setError(stripeError.message || "An error occurred");
        return;
      }
      // Here you would send the paymentMethod.id to your server to complete the payment
      // For demo purposes, we'll simulate a successful payment
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setProcessing(false);
    }
  };
  return <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-brown-800 mb-6">Payment Details</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="card-element" className="block text-sm font-medium text-brown-700 mb-1">
            Credit or debit card
          </label>
          <div className="border border-brown-200 rounded-lg p-4">
            <CardElement id="card-element" options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#1F2937",
                "::placeholder": {
                  color: "#6B7280"
                }
              }
            }
          }} />
          </div>
        </div>
        {error && <div className="rounded-md bg-red-50 p-4">
            <p className="text-sm text-red-700">{error}</p>
          </div>}
        <button type="submit" disabled={!stripe || processing} className="w-full bg-sienna-500 text-white py-3 px-4 rounded-lg hover:bg-sienna-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
          {processing ? <>
              <Loader className="animate-spin -ml-1 mr-2 h-4 w-4" />
              Processing...
            </> : `Pay $${amount.toFixed(2)}`}
        </button>
      </div>
      <p className="mt-4 text-sm text-brown-600 text-center">
        Your payment is secure and encrypted
      </p>
    </form>;
};