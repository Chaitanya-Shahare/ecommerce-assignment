import { IProduct } from "@/app/page";
import { useAppDispatch } from "@/lib/hooks";
import { addToCart } from "@/lib/slices/cart";
import { RiStarFill, RiStarSFill } from "@remixicon/react";
import Link from "next/link";

export const Card = ({ product }: { product: IProduct }) => {

  const dispatch = useAppDispatch();

  return (
    <div className="p-2 hover:bg-gray-50 cursor-pointer relative flex flex-col border-[1px] rounded-md">
      <Link href={`/products/${product.id}`} className="flex-1">
        <div className="h-48 bg-gray-300 rounded-md"></div>
        <h3 className="text-lg font-bold mt-2 line-clamp-1">{product.title}</h3>
        <div className="flex justify-between items-center mb-2">
          <p>$ {product.price}</p>
          <p className="text-sm font-bold text-gray-900 flex items-center">
            {product.rating.toFixed(1)}
            <RiStarSFill className="text-yellow-400" />
          </p>
        </div>
      </Link>
      <button
        className="bg-black text-white p-2 rounded-md"
        onClick={() => {
          const item = {
            productId: product.id.toString(),
            quantity: 1,
            product: product,
          }
          dispatch(addToCart(item));
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export const CardSkeleton = () => {
  return (
    <div className="p-2 hover:bg-gray-50 cursor-pointer relative flex flex-col border-[1px] rounded-md">
      <div className="h-48  bg-gray-300 animate-pulse"></div>
      <div className="text-lg font-bold mt-2 line-clamp-1 animate-pulse">
        Loading...
      </div>
      <div className="flex justify-between items-center mb-2">
        <p className="animate-pulse">$ 0</p>
        <p className="text-sm font-bold text-gray-900 flex items-center animate-pulse">
          0
          <RiStarSFill className="text-yellow-400" />
        </p>
      </div>
      <button
        className="bg-black text-white p-2 rounded-md animate-pulse"
        onClick={(e) => {
          e.stopPropagation();
          // Add to cart logic here
        }}
      >
        Add to cart
      </button>
    </div>
  );
};
