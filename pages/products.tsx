import { useEffect, useState } from "react";
import Product from "../components/product";
import { IProduct } from "../models/product"; // Import the interface

const ProductsPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]); // Explicitly type the state

  useEffect(() => {
    // Fetch product data from API
    const fetchProducts = async () => {
      const res = await fetch("/api/products"); // Endpoint for fetching all products
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <Product key={product.productId} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
