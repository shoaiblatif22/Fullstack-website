import React, { useState, useEffect } from "react";
import { IProduct } from "../models/product";
import Product from "../components/product";
import { useRouter } from "next/dist/client/router";


const ProductDetail = ({ }: {  }) => {const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

return (
    <main className="px-10 py-6 flex flex-col flex-1">
      <Product {...product} />
    </main>
  );
};

export default ProductDetail;
