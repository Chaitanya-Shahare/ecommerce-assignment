import { Filter } from "@/components/filter";
import { Products } from "@/components/products";
import StoreProvider from "./StoreProvider";

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

const categories = [
  "smartphones",
  "laptops",
  "lighting",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "clothing",
];

export default async function Home() {
  let data = {
    products: [],
  };
  try {
    const response = await fetch(
      "https://fake-ecommerce-app-api.onrender.com/products?limit=10&category=smartphones,laptops&minPrice=0&maxPrice=5000"
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    data = await response.json();
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="max-w-6xl mx-auto p-4 min-h-[60vh]">
      <div className="grid grid-cols-[1fr,3fr] gap-4">
        <StoreProvider>
          <Filter categories={categories} />
          {/* <Products products={data.products} /> */}
          <Products />
        </StoreProvider>
      </div>
    </div>
  );
}
