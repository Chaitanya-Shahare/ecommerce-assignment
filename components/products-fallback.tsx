import { IProduct } from "@/app/page";
import { Card } from "./card";

export const ProductsFallback = async () => {
  const data = await fetch(
    "https://fake-ecommerce-app-api.onrender.com/products?limit=10&page=1",
  );
  const productsData = await data.json();

  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {productsData.products.map((product: IProduct, index: number) => (
        <Card key={index} product={product} />
      ))}
    </div>
  );
};
