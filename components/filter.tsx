"use client";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useMemo } from "react";

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
            type="text"
            name=""
            id=""
            placeholder="Min"
            className="border w-12 p-2"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Max"
            className="border w-12 p-2"
          />
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-lg font-bold mb-1">Customer Rating</h4>

        <ul>
          {Array.from({ length: 2 }).map((_, i) => (
            <li key={i}>
              <input
                type="checkbox"
                name=""
                id={"Rating " + i}
                className="mr-1"
              />
              <label htmlFor={"Rating " + i}>{4 - i} & above</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
