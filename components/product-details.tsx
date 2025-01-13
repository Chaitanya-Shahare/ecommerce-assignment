import { IProduct } from "@/app/page";
import { AddToCart } from "./add-to-cart";

export const ProductDetails = ({ product }: { product: IProduct }) => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-2">{product.title}</h2>
      <p className="text-lg font-semibold mb-4">${product.price}</p>
      <p className="">{product.description}</p>
      <p className="mb-24 mt-auto font-semibold capitalize">Category: {product.category}</p>
      <AddToCart product={product} />
    </div>
  );
};
