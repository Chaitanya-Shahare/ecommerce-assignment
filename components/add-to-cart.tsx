"use client";

import { useState } from "react";

export const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex items-center gap-1">
      <button className="p-4 bg-black text-white w-3/5">Add to Cart</button>

      <div className="flex items-center border-2 text-xl">
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
