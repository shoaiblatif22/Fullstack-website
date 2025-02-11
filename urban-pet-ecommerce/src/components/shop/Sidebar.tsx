import React, { useState } from "react";
import { TrendingUp, Star, Clock, Tags } from "lucide-react";
export const Sidebar = () => {
  const [priceRange, setPriceRange] = useState([0, 200]);
  const categories = ["Beds & Furniture", "Food & Treats", "Toys", "Collars & Leashes", "Grooming", "Health & Wellness", "Training & Behavior", "Travel & Outdoor"];
  return <div className="w-64 bg-white p-4 rounded-lg shadow-sm">
      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Categories
          </h3>
          <div className="space-y-2">
            {categories.map(category => <label key={category} className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-600">{category}</span>
              </label>)}
          </div>
        </div>
        {/* Price Range */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Price Range
          </h3>
          <div className="space-y-4">
            <input type="range" min="0" max="200" value={priceRange[1]} onChange={e => setPriceRange([priceRange[0], parseInt(e.target.value)])} className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>
        {/* Quick Filters */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Quick Filters
          </h3>
          <div className="space-y-2">
            <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
              <TrendingUp className="h-4 w-4" />
              <span>Trending Now</span>
            </button>
            <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
              <Star className="h-4 w-4" />
              <span>Best Sellers</span>
            </button>
            <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
              <Clock className="h-4 w-4" />
              <span>New Arrivals</span>
            </button>
            <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
              <Tags className="h-4 w-4" />
              <span>On Sale</span>
            </button>
          </div>
        </div>
      </div>
    </div>;
};