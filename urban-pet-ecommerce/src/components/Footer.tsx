import React from "react";
export const Footer = () => {
  return <footer className="bg-gradient-to-b from-white to-indigo-50" role="contentinfo">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mt-8 border-t border-indigo-100 pt-8 md:flex md:items-center md:justify-between">
          <nav className="flex space-x-6 md:order-2" aria-label="Footer navigation">
            <a href="/about" className="text-indigo-500 hover:text-indigo-600 transition-colors" aria-label="About Us">
              About Us
            </a>
            <a href="/contact" className="text-indigo-500 hover:text-indigo-600 transition-colors" aria-label="Contact Us">
              Contact
            </a>
            <a href="/shipping" className="text-indigo-500 hover:text-indigo-600 transition-colors" aria-label="Shipping Information">
              Shipping
            </a>
          </nav>
          <p className="mt-8 text-base text-indigo-400 md:mt-0 md:order-1">
            © {new Date().getFullYear()} Urban Pet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};