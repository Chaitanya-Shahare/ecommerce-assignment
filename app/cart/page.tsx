import { CartItems } from "@/components/cart-items";
import { OrderSummary } from "@/components/order-summary";

function CartPage() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-lg md:text-3xl font-semibold md:font-bold mb-6">
        Your Cart
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[60vh]">
        <CartItems />
        <OrderSummary />
      </div>
    </div>
  );
}

export default CartPage;

export const metadata = {
  title: "Cart",
  description: "Your cart items",
};
