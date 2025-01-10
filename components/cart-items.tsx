"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { IItem, removeFromCart } from "@/lib/slices/cart";

export const CartItems = () => {
  const cart = useAppSelector((state) => state.cart.items);
  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.productId} item={item} />
      ))}
    </div>
  );
};

export const CartItem = ({ item }: { item: IItem }) => {
  "use client";

  const dispatch = useAppDispatch();
  return (
    <div className="p-2 grid grid-cols-[1fr,3fr] gap-4 border-b-2">
      <div className="h-40 w-40 bg-gray-300"></div>
      <div className="flex justify-between items-end">
        <div className="flex flex-col h-full justify-between">
          <div>
            <h4 className="text-xl font-bold">{item.product.title}</h4>
            <p className="line-clamp-2">{item.product.description}</p>
          </div>
          <div>
            <p className="text-md font-semibold">Quantity: {item.quantity}</p>
            <p className="text-md font-semibold">
              Price: ${item.product.price}
            </p>
          </div>
        </div>
        <button
          className="underline underline-offset-4"
          onClick={() => {
            dispatch(removeFromCart({ productId: item.productId }));
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
