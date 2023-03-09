import Link from "next/link";
import classNames from "classnames";
import { IProduct } from "../models/product";

const Product: React.FC<IProduct> = ({ productId, productName, category, sellingPrice, image }) => {
  return (
    <Link href={`/${productId}`}>
      <a className="m-3 w-96 text-left no-underline border border-solid border-gray-200 rounded-lg hover:shadow-md focus:shadow-md focus:outline-none">
        <div
          id="image"
          className={classNames(
            `h-64 rounded-t-lg flex items-center justify-center`,
            {
              "bg-blue-100": image === 0,
              "bg-pink-100": image === 1,
              "bg-purple-100": image === 2,
              "bg-green-100": image === 3,
            }
          )}
        >
          <span className="material-icons text-6xl text-white">image</span>
        </div>
        <div className="p-5">
          <h2 className="m0 mb-4 text-2xl font-medium">{productName}</h2>
          <p className="m-0 text-xl">Category: {category}</p>
          <p className="m-0 text-xl">£{sellingPrice}</p>
        </div>
      </a>
    </Link>
  );
};

export default Product;
