export const Card = ({ title, price }: { title: string; price: string }) => {
  return (
    <div className="p-1 w-44 hover:bg-gray-100">
      <div className="h-48  bg-gray-300"></div>
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p className="">{price}</p>
    </div>
  );
};
