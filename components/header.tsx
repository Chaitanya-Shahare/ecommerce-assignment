"use client";
import { useAppSelector } from "@/lib/hooks";
import { RiShoppingCartLine } from "@remixicon/react";
import Link from "next/link";

export const Header = () => {
  const cart = useAppSelector((state) => state.cart.items);

  return (
    <>
      <header className="flex justify-between items-center p-4 max-w-6xl mx-auto font-sans">
        <h1 className="text-xl md:text-3xl font-bold md:font-black">
          <Link href={"/"}>E-Commerce</Link>
        </h1>
        <Link href={"/cart"} className="flex items-center space-x-2">
          <RiShoppingCartLine />
          <span>{cart.length}</span>
        </Link>
      </header>
      <hr />
    </>
  );
};
