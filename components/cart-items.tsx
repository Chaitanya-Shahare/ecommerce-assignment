"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { IItem, removeFromCart, updateQuantity } from "@/lib/slices/cart";
import { RiImageLine } from "@remixicon/react";

export const CartItems = () => {
  const cart = useAppSelector((state) => state.cart.items);
  return (
    <div>
      {cart.map((item: IItem) => (
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
      <div className="h-40 w-40 bg-gray-300 rounded-md flex justify-center items-center text-gray-500">
        <RiImageLine size={30} />
      </div>
      <div className="flex justify-between items-end">
        <div className="flex flex-col h-full justify-between">
          <div>
            <h4 className="text-lg md:text-xl font-bold">
              {item.product.title}
            </h4>
            <p className="line-clamp-2">{item.product.description}</p>
          </div>
          <div>
            <div className="text-sm md:text-md font-semibold flex gap-2">
              <p>Quantity:</p>
              <div className="border-[1px]">
                <button
                  className="px-2"
                  onClick={() => {
                    if (item.quantity <= 1) return;
                    dispatch(
                      updateQuantity({
                        productId: item.productId,
                        quantity: item.quantity - 1,
                      }),
                    );
                  }}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="px-2"
                  onClick={() => {
                    dispatch(
                      updateQuantity({
                        productId: item.productId,
                        quantity: item.quantity + 1,
                      }),
                    );
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <p className="text-sm md:text-md font-semibold">
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
