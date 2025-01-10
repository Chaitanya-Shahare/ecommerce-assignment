"use client";
import { IProduct } from "@/app/page";
import { useAppSelector } from "@/lib/hooks";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Card } from "./card";

export const Products = () => {
  const [data, setData] = useState({ products: [] });
  const searchParams = useSearchParams();

  const category = useMemo(
    () => searchParams.getAll("category"),
    [searchParams]
  );

  const minPrice = useMemo(() => searchParams.get("minPrice"), [searchParams]);

  const maxPrice = useMemo(() => searchParams.get("maxPrice"), [searchParams]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("run", searchParams.getAll("category"));
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fake-ecommerce-app-api.onrender.com/products?limit=10" +
            (category.length
              ? `&category=${category.reduce((acc, ele) => acc + "," + ele)}`
              : "") +
            (minPrice ? `&minPrice=${minPrice}` : "") +
            (maxPrice ? `&maxPrice=${maxPrice}` : "")
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category, maxPrice, minPrice, searchParams]);

  const aboveRating = useAppSelector((state) => state.filter.aboveRating);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {loading && <h3 className="text-xl font-bold">Loading...</h3>}
      {data.products.length === 0 && !loading && (
        <h3 className="text-xl font-bold">No Products Found</h3>
      )}
      {data.products
        .filter((product: IProduct) => product.rating >= aboveRating)
        .map((product: IProduct, index: number) => (
          <Card key={index} product={product} />
        ))}
    </div>
  );
};
