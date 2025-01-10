export const ImageGallery = () => {
  return (
    <div className="max-h-[400px] grid grid-cols-2 gap-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <div className="h-48 bg-gray-300"></div>
      ))}
    </div>
  );
};
