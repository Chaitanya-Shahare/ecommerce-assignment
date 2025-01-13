"use client";
import { IProduct } from "@/app/page";
import { useAppSelector } from "@/lib/hooks";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Card, CardSkeleton } from "./card";
import InfiniteScroll from "./infinite-scroll";

export const Products = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const searchParams = useSearchParams();

  const category = useMemo(
    () => searchParams.getAll("category"),
    [searchParams],
  );

  const minPrice = useMemo(() => searchParams.get("minPrice"), [searchParams]);

  const maxPrice = useMemo(() => searchParams.get("maxPrice"), [searchParams]);

  const [loading, setLoading] = useState(true);

  const fetchData = async (page: number) => {
    try {
      const response = await fetch(
        `https://fake-ecommerce-app-api.onrender.com/products?limit=10&page=${page}` +
          (category.length
            ? `&category=${category.reduce((acc, ele) => acc + "," + ele)}`
            : "") +
          (minPrice ? `&minPrice=${minPrice}` : "") +
          (maxPrice ? `&maxPrice=${maxPrice}` : ""),
      );
      const newData = await response.json();
      if (newData.products.length === 0) {
        setHasMore(false);
      } else {
        setData((prevData) => [...prevData, ...newData.products]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const aboveRating = useAppSelector((state) => state.filter.aboveRating);

  const renderData = () => {
    return data
      .filter((product) => product.rating >= aboveRating)
      .map((product, index) => <Card key={index} product={product} />);
  };

  useEffect(() => {
    setData([]);
    setHasMore(true);
    setLoading(true);
    fetchData(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, maxPrice, minPrice, searchParams]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {loading && <h3 className="text-xl font-bold">Loading...</h3>}
      {data.length === 0 && !loading && (
        <h3 className="text-xl font-bold">No Products Found</h3>
      )}
      <InfiniteScroll
        fetchData={fetchData}
        renderData={renderData}
        hasMore={hasMore}
      />
      {hasMore && <CardSkeleton />}
    </div>
  );
};
