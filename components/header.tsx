"use client";
import { useAppSelector } from "@/lib/hooks";
import { RiShoppingCartLine } from "@remixicon/react";
import Link from "next/link";

export const Header = () => {
  const cart = useAppSelector((state) => state.cart.items);
  console.log("cart", cart);

  return (
    <>
      <header className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold">
          <Link href={"/"}>E-Commerce Shop App</Link>
        </h1>
        <button className="flex items-center space-x-2">
          <RiShoppingCartLine />
          <span>{cart.length}</span>
        </button>
      </header>
      <hr />
    </>
  );
};
