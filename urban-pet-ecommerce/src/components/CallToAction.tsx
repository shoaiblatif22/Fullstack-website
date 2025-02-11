import React from "react";
import { ArrowRight } from "lucide-react";
export const CallToAction = () => {
  return <div className="bg-gradient-to-r from-brown-800 to-sienna-500 text-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Pet Lovers Community
            </h2>
            <p className="text-brown-100 mb-8">
              Get exclusive access to new products, special offers, and expert
              pet care tips. Sign up today and receive 10% off your first
              purchase!
            </p>
            <div className="flex space-x-4">
              <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-lg flex-1 text-brown-800 focus:outline-none focus:ring-2 focus:ring-sienna-300" />
              <button className="bg-cream text-brown-800 px-6 py-2 rounded-lg font-semibold hover:bg-brown-100 transition-colors flex items-center">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Happy dog" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </div>;
};