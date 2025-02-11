import React from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import { SEO } from "./SEO";
export const Basket = () => {
  const cartItems = [{
    id: 1,
    name: "Luxury Pet Bed",
    price: 79.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
  // Add more items as needed
  ];
  return <>
      <SEO title="Shopping Cart" description="Review and manage your selected pet supplies. Secure checkout and fast shipping available." keywords="shopping cart, checkout, pet supplies, order" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2" aria-label="Cart items">
            {cartItems.map(item => <article key={item.id} className="flex items-center border-b border-gray-200 py-4">
                <img src={item.image} alt={`${item.name} product`} className="h-24 w-24 object-cover rounded" />
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-medium text-gray-900">
                    {item.name}
                  </h2>
                  <p className="text-blue-600 font-medium" aria-label="Price">
                    ${item.price}
                  </p>
                  <div className="flex items-center mt-2" role="group" aria-label="Quantity controls">
                    <button className="p-1 hover:bg-blue-50 rounded" aria-label="Decrease quantity">
                      <Minus className="h-4 w-4 text-blue-600" />
                    </button>
                    <span className="mx-2 font-medium" aria-label="Current quantity">
                      {item.quantity}
                    </span>
                    <button className="p-1 hover:bg-blue-50 rounded" aria-label="Increase quantity">
                      <Plus className="h-4 w-4 text-blue-600" />
                    </button>
                  </div>
                </div>
                <button className="p-2 hover:bg-red-50 rounded" aria-label={`Remove ${item.name} from cart`}>
                  <Trash2 className="h-5 w-5 text-red-500" />
                </button>
              </article>)}
          </section>
          <aside className="bg-gray-50 rounded-lg p-6 h-fit" aria-label="Order summary">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Order Summary
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span aria-label="Subtotal amount">$79.99</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span aria-label="Shipping amount">$5.00</span>
              </div>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span aria-label="Total amount">$84.99</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 bg-sienna-500 text-white py-3 rounded-lg hover:bg-sienna-600 transition-colors" aria-label="Proceed to checkout">
              Proceed to Checkout
            </button>
          </aside>
        </div>
      </div>
    </>;
};