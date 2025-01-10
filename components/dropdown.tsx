"use client";

import { useEffect, useRef, useState } from "react";

interface DropDownProps {
  title: string;
  options: string[];
  defaultValue: string;
  updateSelection: (value: string) => void;
}

export const DropDown = ({
  title,
  options,
  defaultValue,
  updateSelection,
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <button className="border-2 p-2">
      <p>
        {title}: {selected}
      </p>
      <div className="absolute" ref={optionsRef}>
        {isOpen &&
          options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
                updateSelection(option);
              }}
            >
              {option}
            </button>
          ))}
      </div>
    </button>
  );
};
