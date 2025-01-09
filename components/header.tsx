import { RiShoppingCartLine } from "@remixicon/react";

export const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold">E-Commerce Shop App</h1>
        <button className="flex items-center space-x-2">
          <RiShoppingCartLine />
          <span>3</span>
        </button>
      </header>
      <hr />
    </>
  );
};
