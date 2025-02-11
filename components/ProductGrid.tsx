import React from "react";
const products = [{
  id: 1,
  name: "Luxury Pet Bed",
  price: 79.99,
  image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  category: "Beds & Furniture"
}, {
  id: 2,
  name: "Designer Collar",
  price: 29.99,
  image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  category: "Accessories"
}, {
  id: 3,
  name: "Interactive Toy Set",
  price: 24.99,
  image: "https://images.unsplash.com/photo-1554456854-55a089fd4cb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  category: "Toys"
}];
export const ProductGrid = () => {
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-brown-800 mb-8">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => <div key={product.id} className="group relative bg-cream rounded-lg border border-brown-100 hover:border-sienna-200 transition-all duration-300 overflow-hidden">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg bg-white">
              <img src={product.image} alt={product.name} className="h-48 w-full object-cover object-center transform transition-transform group-hover:scale-105" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-brown-800">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-brown-600">{product.category}</p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-lg font-bold text-sienna-500">
                  ${product.price}
                </p>
                <button className="px-4 py-2 bg-brown-50 text-brown-800 rounded-md hover:bg-brown-100 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
};