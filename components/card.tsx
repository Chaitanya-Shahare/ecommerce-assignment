import { IProduct } from "@/app/page";
import Link from "next/link";

export const Card = ({ product }: { product: IProduct }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="p-2  hover:bg-gray-100 cursor-pointer"
    >
      <div className="h-48  bg-gray-300"></div>
      <h3 className="text-lg font-bold mt-2 line-clamp-1">{product.title}</h3>
      <div className="flex justify-between items-center">
        <p className="">$ {product.price}</p>
        <p className="text-sm text-gray-500">Rating: {product.rating}</p>
      </div>
    </Link>
  );
};

export const CardSkeleton = () => {
  return (
    <div className="p-2  hover:bg-gray-100 cursor-pointer">
      <div className="h-48  bg-gray-300 animate-pulse"></div>
      <div className="h-10 w-4/5 mt-2 line-clamp-1 animate-pulse">
        Loading...
      </div>
      <div className="flex justify-between items-center">
        <div className="h-4 w-1/4 animate-pulse">$ 0</div>
        <div className="h-4 w-1/2 text-gray-500 animate-pulse">Rating: 0</div>
      </div>
    </div>
  );
};
