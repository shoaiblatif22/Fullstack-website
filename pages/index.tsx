import Image from "next/image";
import { useEffect, useState } from "react";
import Product from "../components/product";
import { IProduct } from "../models/product";

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await (await fetch(`api/products`)).json();
      setProducts(res);
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <main className="py-20 flex flex-col flex-1 justify-center items-center">
        <h1 className="m-0 leading-snug text-6xl text-center">
        </h1>
        
        <div className="mt-10 flex flex-wrap flex-col sm:flex-row w-full justify-center items-center">
          {products.map((p) => (
            <Product key={p.productId} {...p} />
          ))}
        </div>
      </main>

      <footer className="w-full h-24 flex justify-center items-center border-t border-solid border-gray-200">
      </footer>
    </div>
  );
}
