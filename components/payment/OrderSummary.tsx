import React from "react";
interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
interface OrderDetails {
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}
interface OrderSummaryProps {
  order: OrderDetails;
}
export const OrderSummary = ({
  order
}: OrderSummaryProps) => {
  return <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-brown-800 mb-6">Order Summary</h2>
      <div className="space-y-4">
        {order.items.map(item => <div key={item.id} className="flex justify-between items-center">
            <div>
              <h3 className="text-brown-800 font-medium">{item.name}</h3>
              <p className="text-sm text-brown-600">
                Quantity: {item.quantity}
              </p>
            </div>
            <p className="text-brown-800">${item.price.toFixed(2)}</p>
          </div>)}
        <div className="border-t border-brown-200 pt-4 space-y-2">
          <div className="flex justify-between text-brown-600">
            <span>Subtotal</span>
            <span>${order.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-brown-600">
            <span>Shipping</span>
            <span>${order.shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-brown-600">
            <span>Tax</span>
            <span>${order.tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-brown-800 pt-2 border-t border-brown-200">
            <span>Total</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-brown-50 rounded-lg p-4">
        <h3 className="text-sm font-medium text-brown-800 mb-2">
          Secure Checkout
        </h3>
        <p className="text-sm text-brown-600">
          Your payment information is encrypted and secure. We never store your
          credit card details.
        </p>
      </div>
    </div>;
};