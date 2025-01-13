import { RiImageLine } from "@remixicon/react";

export const ImageGallery = () => {
  return (
    <div className="max-h-[400px] grid grid-cols-2 gap-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="h-48 bg-gray-300 rounded-md flex justify-center items-center text-gray-500"
        >
          <RiImageLine size={30} />
        </div>
      ))}
    </div>
  );
};
