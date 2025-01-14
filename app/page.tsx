import { Filter, FilterSkeleton } from "@/components/filter";
import { Products } from "@/components/products";
// import { ProductsFallback } from "@/components/products-fallback";
import { Metadata } from "next";
import { Suspense } from "react";

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

const FILTER_CATEGORIES = [
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
    <div className="max-w-6xl mx-auto p-4 min-h-[60vh] mb-28">
      <div className="grid grid-cols-1 sm:grid-cols-[1fr,3fr] gap-4">
        <Suspense fallback={<FilterSkeleton categories={FILTER_CATEGORIES} />}>
          <Filter categories={FILTER_CATEGORIES} />
        </Suspense>
        {/* <Suspense fallback={<ProductsFallback />}> */}
        <Suspense fallback={<div>Loading Products...</div>}>
          <Products />
        </Suspense>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "E-commerce App",
  description: "A simple e-commerce app built with Blitz.js",
};
