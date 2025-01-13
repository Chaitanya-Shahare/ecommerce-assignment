"use client";

import { IProduct } from "@/app/page";
import { useAppDispatch } from "@/lib/hooks";
import { addToCart } from "@/lib/slices/cart";
import { useState } from "react";

interface AddToCartProps {
  product: IProduct;
}

export const AddToCart = ({ product }: AddToCartProps) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center gap-1">
      <button
        className="p-4 bg-black text-white w-3/5 rounded-md"
        onClick={() => {
          dispatch(addToCart({ productId: product.id, product, quantity }));
          setQuantity(1);
        }}
      >
        Add to Cart
      </button>

      <div className="flex items-center border-2 text-xl rounded-md">
        <button
          onClick={() =>
            setQuantity((prev) => {
              if (prev === 1) return 1;
              return prev - 1;
            })
          }
          className="p-2"
        >
          -
        </button>
        <p className="p-3">{quantity}</p>

        <button onClick={() => setQuantity((prev) => prev + 1)} className="p-2">
          +
        </button>
      </div>
    </div>
  );
};
