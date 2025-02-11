import React from "react";
import { ArrowRight, Gift, Calendar } from "lucide-react";
export const SpecialOffers = () => {
  return <section className="bg-gradient-to-r from-brown-800 to-sienna-500 py-16" aria-labelledby="special-offers-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-cream">
            <div className="flex items-center space-x-2">
              <Gift className="h-6 w-6" aria-hidden="true" />
              <span className="text-lg font-medium">Special Launch Offer</span>
            </div>
            <h2 id="special-offers-heading" className="mt-4 text-3xl font-bold">
              Get 20% Off Your First Order
            </h2>
            <p className="mt-4 text-brown-100">
              Plus, receive exclusive access to:
            </p>
            <ul className="mt-4 space-y-2" role="list" aria-label="Special offer benefits">
              <li className="flex items-center space-x-2">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                <span>Early access to new products</span>
              </li>
              <li className="flex items-center space-x-2">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                <span>Member-only discounts</span>
              </li>
              <li className="flex items-center space-x-2">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                <span>Free pet care guides</span>
              </li>
            </ul>
            <div className="mt-8 flex items-center space-x-2">
              <Calendar className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm">Limited time offer - Ends soon!</span>
            </div>
          </div>
          <div className="bg-cream p-6 rounded-lg">
            <h3 className="text-xl font-bold text-brown-800">Sign Up Now</h3>
            <p className="mt-2 text-brown-600">
              Join our community and get instant access to exclusive offers
            </p>
            <form className="mt-6 space-y-4" aria-label="Newsletter signup form">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input id="email" type="email" placeholder="Enter your email" required className="w-full px-4 py-2 rounded-lg border border-brown-200 focus:outline-none focus:ring-2 focus:ring-sienna-500" aria-label="Email address" />
              </div>
              <button type="submit" className="w-full bg-sienna-500 text-white py-2 px-4 rounded-lg hover:bg-sienna-600 transition-colors flex items-center justify-center" aria-label="Sign up for special offer">
                Claim Your Discount
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};