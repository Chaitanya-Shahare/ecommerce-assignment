"use client";
import { IProduct } from "@/app/page";
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

  useEffect(() => {
    console.log("run", searchParams.getAll("category"));
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fake-ecommerce-app-api.onrender.com/products?limit=10" +
            (category.length
              ? `&category=${category.reduce((acc, ele) => acc + "," + ele)}`
              : "")
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [category, searchParams]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.products.map((product: IProduct, index: number) => (
        <Card key={index} product={product} />
      ))}
    </div>
  );
};
