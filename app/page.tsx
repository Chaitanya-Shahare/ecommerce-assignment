import { Filter } from "@/components/filter";
import { Products } from "@/components/products";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  image: string;
  __v: number;
}

const categories = ["smartphones", "laptops"];

export default async function Home() {
  let data = {
    products: [],
  };
  try {
    const response = await fetch(
      "https://fake-ecommerce-app-api.onrender.com/products?limit=10&category=smartphones,laptops&minPrice=0&maxPrice=5000"
    );
    data = await response.json();
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="max-w-6xl mx-auto p-4 min-h-[60vh]">
      <div className="grid grid-cols-[1fr,2fr] gap-4">
        <Filter categories={categories} />
        {/* <Products products={data.products} /> */}
        <Products />
      </div>
    </div>
  );
}
