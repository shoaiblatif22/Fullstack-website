import React, { useMemo, useState } from "react";
import { Sidebar } from "../components/shop/Sidebar";
import { SearchBar } from "../components/shop/SearchBar";
import { SEO } from "../components/SEO";
const products = [{
  id: 1,
  name: "Luxury Pet Bed",
  price: 79.99,
  image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  category: "Beds & Furniture",
  description: "Premium memory foam pet bed with washable cover, perfect for medium to large dogs."
}, {
  id: 2,
  name: "Designer Collar",
  price: 29.99,
  image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  category: "Accessories",
  description: "Handcrafted leather collar with durable hardware and custom fitting."
}, {
  id: 3,
  name: "Interactive Toy Set",
  price: 24.99,
  image: "https://images.unsplash.com/photo-1554456854-55a089fd4cb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  category: "Toys",
  description: "Set of 3 interactive toys designed to keep your pet mentally stimulated."
}, {
  id: 4,
  name: "Premium Dog Food",
  price: 49.99,
  image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  category: "Food & Treats",
  description: "All-natural, grain-free formula with real meat as the first ingredient."
}, {
  id: 5,
  name: "Grooming Kit",
  price: 34.99,
  image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  category: "Grooming",
  description: "Complete grooming set including brush, nail clippers, and shampoo."
}, {
  id: 6,
  name: "Travel Carrier",
  price: 89.99,
  image: "https://images.unsplash.com/photo-1549291981-56d443d5e2a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  category: "Travel & Outdoor",
  description: "Airline-approved pet carrier with comfortable padding and ventilation."
}];
export const CategoriesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const filteredProducts = useMemo(() => {
    let filtered = products;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query) || product.category.toLowerCase().includes(query));
    }
    switch (sortBy) {
      case "price-low":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...filtered].sort((a, b) => b.price - a.price);
      case "newest":
        return [...filtered].reverse();
      default:
        return filtered;
    }
  }, [searchQuery, sortBy]);
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "Product",
      position: index + 1,
      name: product.name,
      description: product.description,
      image: product.image,
      offers: {
        "@type": "Offer",
        price: product.price,
        priceCurrency: "USD"
      }
    }))
  };
  return <>
      <SEO title="Shop Premium Pet Products" description="Discover our curated collection of premium pet supplies, from comfortable beds to nutritious treats. Find everything your pet needs for a happy, healthy life." keywords="pet supplies, dog beds, cat toys, pet food, pet accessories" />
      <script type="application/ld+json">
        {JSON.stringify(productStructuredData)}
      </script>
      <div className="min-h-screen bg-gray-50">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex gap-8">
            <aside className="hidden md:block" aria-label="Product filters">
              <Sidebar />
            </aside>
            <main className="flex-1">
              <header className="mb-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold text-brown-800">
                    {searchQuery ? "Search Results" : "All Products"}
                    <span className="ml-2 text-lg text-brown-600" aria-label="Product count">
                      ({filteredProducts.length} items)
                    </span>
                  </h1>
                  <select className="border border-brown-200 rounded-lg py-2 px-3 text-brown-600 focus:outline-none focus:ring-2 focus:ring-sienna-500" value={sortBy} onChange={e => setSortBy(e.target.value)} aria-label="Sort products">
                    <option value="featured">Sort by: Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>
              </header>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="grid" aria-label="Products grid">
                {filteredProducts.map(product => <article key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow" itemScope itemType="https://schema.org/Product">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg">
                      <img src={product.image} alt={`${product.name} - ${product.description}`} className="h-48 w-full object-cover object-center transform transition-transform hover:scale-105" itemProp="image" />
                    </div>
                    <div className="p-4">
                      <div className="mb-2">
                        <span className="text-sm text-sienna-500 font-medium">
                          {product.category}
                        </span>
                      </div>
                      <h2 className="text-lg font-semibold text-brown-800" itemProp="name">
                        {product.name}
                      </h2>
                      <p className="mt-1 text-sm text-brown-600 line-clamp-2" itemProp="description">
                        {product.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <p className="text-lg font-bold text-brown-800" itemProp="price">
                          ${product.price.toFixed(2)}
                        </p>
                        <button className="px-4 py-2 bg-sienna-500 text-white rounded-lg hover:bg-sienna-600 transition-colors" aria-label={`Add ${product.name} to cart`}>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </article>)}
              </div>
              {filteredProducts.length === 0 && <div className="text-center py-12" role="alert" aria-label="No products found">
                  <p className="text-brown-600">
                    No products found matching your search.
                  </p>
                </div>}
            </main>
          </div>
        </div>
      </div>
    </>;
};