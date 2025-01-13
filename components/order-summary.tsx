"use client";

import { useAppSelector } from "@/lib/hooks";

export const OrderSummary = () => {

  const cartItems = useAppSelector(state => state.cart.items);

  const subtotal = cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.product.price;
  }, 0)

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

      <div className="flex justify-between mt-2">
        <p>Subtotal</p>
        <p>${subtotal}</p>
      </div>
      <div className="flex justify-between mt-2 mb-4">
        <p>Shipping</p>
        <p className="text-gray-600">Calculated at the next step</p>
      </div>
      <hr className="border-black" />

      <div className="flex justify-between mt-4 font-semibold">
        <p>Total</p>
        <p>${subtotal}</p>
      </div>
    </div>
  );
};
