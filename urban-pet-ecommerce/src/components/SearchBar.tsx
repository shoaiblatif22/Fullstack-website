import React from "react";
import { Search } from "lucide-react";
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}
export const SearchBar = ({
  value,
  onChange
}: SearchBarProps) => {
  return <div className="w-full bg-cream border-b border-brown-200" role="search">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="relative">
          <label htmlFor="search" className="sr-only">
            Search products
          </label>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-brown-400" aria-hidden="true" />
          </div>
          <input id="search" type="search" className="block w-full pl-10 pr-3 py-3 border border-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sienna-500 focus:border-sienna-500 bg-white text-brown-900 placeholder-brown-400" placeholder="Search for pet products..." value={value} onChange={e => onChange(e.target.value)} aria-label="Search for products" />
        </div>
      </div>
    </div>;
};