import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../../models/product";
import {ErrorResponse} from "../../../models/error"

  
const products = Array(100)
  .fill(0)
  .map((_, i) => {
    const idx = i + 1;
    return {
      productId: idx,
      productName: `Product ${idx}`,
      sellingPrice: ((i % 5) + 5) * 12,
      category: (i % 10) + 1,
      image: i % 4,
    };
  });

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct|ErrorResponse>
) {
  const productId = Number(req.query.id);
  const product = products.find((p) => p.productId === productId);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.status(200).json(product);
}
