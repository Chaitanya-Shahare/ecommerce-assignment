"use client";
import { useAppDispatch } from "@/lib/hooks";
import { setAboveRating } from "@/lib/slices/filter";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useMemo, useState } from "react";

export interface FilterProps {
  categories: string[];
}

export const Filter = ({ categories: c }: FilterProps) => {
  const searchParams = useSearchParams();

  const categories = useMemo(
    () => searchParams.getAll("category"),
    [searchParams]
  );

  const onCategoryChange = (category: string) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search);

      if (e.target.checked) {
        params.append("category", category);
      } else {
        const categories = params
          .getAll("category")
          .filter((c) => c !== category);
        params.delete("category");
        categories.forEach((c) => params.append("category", c));
      }

      url.search = params.toString();
      window.history.pushState({}, "", url.toString());
    };
  };

  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") ?? "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") ?? "");

  const dispatch = useAppDispatch();

  return (
    <div className="">
      <h3 className="text-2xl font-bold mb-2">Filters</h3>

      <div className="mb-4">
        <h4 className="text-lg font-bold mb-1">Categories</h4>
        <ul>
          {c.map((category, i) => (
            <li key={i}>
              <input
                type="checkbox"
                name=""
                id={"catetory " + i}
                className="mr-1"
                checked={categories.includes(category)}
                onChange={onCategoryChange(category)}
              />
              <label htmlFor={"category " + i} className="capitalize">
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-lg font-bold mb-1">Price Range</h4>

        <div className="flex space-x-2">
          <input
            type="number"
            name=""
            id=""
            placeholder="Min"
            className="border w-20 p-2"
            value={minPrice}
            onChange={(e) => {
              const url = new URL(window.location.href);
              const params = new URLSearchParams(url.search);

              setMinPrice(e.target.value);

              const value = e.target.value;

              if (value === "") {
                params.delete("minPrice");
                url.search = params.toString();
                window.history.pushState({}, "", url.toString());
                return;
              }
              params.set("minPrice", value);
              url.search = params.toString();
              window.history.pushState({}, "", url.toString());
            }}
          />
          <input
            type="number"
            name=""
            id=""
            placeholder="Max"
            className="border w-20 p-2"
            value={maxPrice}
            onChange={(e) => {
              const url = new URL(window.location.href);
              const params = new URLSearchParams(url.search);

              setMaxPrice(e.target.value);

              const value = e.target.value;

              if (value === "") {
                params.delete("maxPrice");
                url.search = params.toString();
                window.history.pushState({}, "", url.toString());
                return;
              }
              params.set("maxPrice", value);
              url.search = params.toString();
              window.history.pushState({}, "", url.toString());
            }}
          />
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-lg font-bold mb-1">Customer Rating</h4>

        <ul>
          {Array.from({ length: 2 }).map((_, i) => (
            <li key={i}>
              <input
                type="radio"
                name="rating"
                value={4 - i}
                id={"Rating " + i}
                className="mr-1"
                onChange={(e) => {
                  dispatch(setAboveRating(e.target.value));
                }}
              />
              <label htmlFor={"Rating " + i}>{4 - i} & above</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
