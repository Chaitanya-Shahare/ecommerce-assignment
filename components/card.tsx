export const Card = ({ title, price }: { title: string; price: number }) => {
  return (
    <div className="p-2  hover:bg-gray-100">
      <div className="h-48  bg-gray-300"></div>
      <h3 className="text-lg font-bold mt-2 line-clamp-1">{title}</h3>
      <p className="">$ {price}</p>
    </div>
  );
};
