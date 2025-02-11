"use client"
import React, {useState} from "react";
import { ShoppingCart, Menu, User } from "lucide-react";
export const Navbar = () => {
  const [cartCount] = useState(0);
  return <nav className="fixed top-0 left-0 right-0 bg-cream/80 backdrop-blur-md border-b border-brown-200 z-50">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-brown-800">Urban Pet</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-brown-800 hover:text-sienna-500 font-medium">
                Home
              </a>
              <a href="#" className="text-brown-600 hover:text-sienna-500 transition-colors">
                Shop
              </a>
              <a href="#" className="text-brown-600 hover:text-sienna-500 transition-colors">
                Categories
              </a>
              <a href="#" className="text-brown-600 hover:text-sienna-500 transition-colors">
                About
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-brown-600 hover:text-sienna-500 transition-colors relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-sienna-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                    {cartCount}
                  </span>}
              </button>
              <button className="p-2 text-brown-600 hover:text-sienna-500 transition-colors">
                <User className="h-5 w-5" />
              </button>
              <button className="p-2 md:hidden text-brown-600 hover:text-sienna-500 transition-colors">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>;
};