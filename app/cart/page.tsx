import { CartItems } from "@/components/cart-items";

function CartPage() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold">Your Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CartItems />
      </div>
    </div>
  );
}

export default CartPage;
