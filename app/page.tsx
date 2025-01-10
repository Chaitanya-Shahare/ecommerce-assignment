"use server";
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
  return (
    <div className="max-w-6xl mx-auto p-4 min-h-[60vh]">
      <div className="grid grid-cols-[1fr,3fr] gap-4">
        <Filter categories={categories} />
        <Products />
      </div>
    </div>
  );
}
