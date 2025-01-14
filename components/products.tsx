"use client";
import { IProduct } from "@/app/page";
import { useAppSelector } from "@/lib/hooks";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Card, CardSkeleton } from "./card";
import InfiniteScroll from "./infinite-scroll";

export const Products = ({
  initialProducts,
}: {
  initialProducts: IProduct[];
}) => {
  const [data, setData] = useState<IProduct[]>(initialProducts);
  const [hasMore, setHasMore] = useState(true);
  const searchParams = useSearchParams();

  const category = useMemo(
    () => searchParams.getAll("category"),
    [searchParams]
  );

  const minPrice = useMemo(() => searchParams.get("minPrice"), [searchParams]);

  const maxPrice = useMemo(() => searchParams.get("maxPrice"), [searchParams]);

  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(
    async (page: number) => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://fake-ecommerce-app-api.onrender.com/products?limit=10&page=${page}` +
            (category.length
              ? `&category=${category.reduce((acc, ele) => acc + "," + ele)}`
              : "") +
            (minPrice ? `&minPrice=${minPrice}` : "") +
            (maxPrice ? `&maxPrice=${maxPrice}` : "")
        );
        const newData = await response.json();
        if (newData.products.length === 0) {
          setHasMore(false);
        } else {
          setData((prevData) => [...prevData, ...newData.products]);
        }
      } catch (error) {
        console.error(error);
        throw new Error(
          "Something went wrong while fetching products, please try again."
        );
      } finally {
        setLoading(false);
      }
    },
    [category, maxPrice, minPrice]
  );

  const aboveRating = useAppSelector((state) => state.filter.aboveRating);

  const sort = useAppSelector((state) => state.filter.sort);

  const renderData = () => {
    return data
      .sort((a, b) => {
        if (sort === "price low to high") {
          return a.price - b.price;
        } else if (sort === "price high to low") {
          return b.price - a.price;
        } else if (sort === "rating") {
          return b.rating - a.rating;
        } else {
          return 0;
        }
      })
      .filter((product) => product.rating >= aboveRating)
      .map((product, index) => <Card key={index} product={product} />);
  };

  useEffect(() => {
    setData([]);
    setHasMore(true);
    setLoading(true);

    const timer = setTimeout(() => {
      fetchData(1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [category, fetchData, maxPrice, minPrice, searchParams]);

  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {loading && <h3 className="text-xl font-bold">Loading...</h3>}

      {data?.length === 0 && !loading && (
        <h3 className="text-xl font-bold">No Products Found</h3>
      )}

      <p className="col-span-1 md:col-span-2 lg:col-span-3">
        Showing {data?.length} products.
      </p>

      <InfiniteScroll
        fetchData={fetchData}
        renderData={renderData}
        hasMore={hasMore}
      />
      {hasMore && <CardSkeleton />}
    </div>
  );
};
