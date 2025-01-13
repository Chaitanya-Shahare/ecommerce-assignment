import { IProduct } from "@/app/page";
import { useAppDispatch } from "@/lib/hooks";
import { addToCart } from "@/lib/slices/cart";
import Link from "next/link";

export const Card = ({ product }: { product: IProduct }) => {

  const dispatch = useAppDispatch();

  return (
    <div className="p-2 hover:bg-gray-50 cursor-pointer relative flex flex-col border-[1px]">
      <Link href={`/products/${product.id}`} className="flex-1">
        <div className="h-48 bg-gray-300"></div>
        <h3 className="text-lg font-bold mt-2 line-clamp-1">{product.title}</h3>
        <div className="flex justify-between items-center mb-2">
          <p>$ {product.price}</p>
          <p className="text-sm text-gray-500">Rating: {product.rating}</p>
        </div>
      </Link>
      <button
        className="bg-black text-white p-2"
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
    <div className="p-2  hover:bg-gray-100 cursor-pointer flex flex-col">
      <div className="h-48  bg-gray-300 animate-pulse"></div>
      <div className="h-10 w-4/5 mt-2 line-clamp-1 animate-pulse">
        Loading...
      </div>
      <div className="flex justify-between items-center">
        <div className="h-4 w-1/4 animate-pulse">$ 0</div>
        <div className="h-4 w-1/2 text-gray-500 animate-pulse">Rating: 0</div>
      </div>
      <button
        className="bg-black text-white p-2"
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
