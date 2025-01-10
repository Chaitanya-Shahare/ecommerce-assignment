import { IProduct } from "@/app/page";

export const Card = ({ product }: { product: IProduct }) => {
  return (
    <div className="p-2  hover:bg-gray-100 cursor-pointer">
      <div className="h-48  bg-gray-300"></div>
      <h3 className="text-lg font-bold mt-2 line-clamp-1">{product.title}</h3>
      <p className="">$ {product.price}</p>
    </div>
  );
};
