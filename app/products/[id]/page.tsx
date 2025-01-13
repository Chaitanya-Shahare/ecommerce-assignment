import { IProduct } from "@/app/page";
import { ImageGallery } from "@/components/image-gallery";
import { ProductDetails } from "@/components/product-details";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  //fake-ecommerce-app-api.onrender.com/products/5
  const productId = params.id;
  const response = await fetch(
    `https://fake-ecommerce-app-api.onrender.com/products/${productId}`
  );
  const product: IProduct = await response.json();

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-11 p-4 min-h-[70vh]">
      <ImageGallery />
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;


export async function generateMetadata(
  { params }: {
    params: { id: string };
  }
) {
  const productId = params.id;

  const response = await fetch(
    `https://fake-ecommerce-app-api.onrender.com/products/${productId}`
  );
  const product: IProduct = await response.json();

  return {
    title: `${product.title} | ${product.category} | $${product.price}`,
    description: `${product.description} | ${product.category} | $${product.price}`,
  }
}
