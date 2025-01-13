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
        <p className="text-gray-500">Calculated at the next step</p>
      </div>
      <hr className="border-black" />

      <div className="flex justify-between mt-4 mb-8 font-semibold">
        <p>Total</p>
        <p>${subtotal}</p>
      </div>


      <button className="bg-black text-white px-4 py-2 mt-4 col-span-2  w-full">Proceed to Checkout</button>
    </div>
  );
};
