export const Filter = () => {
  return (
    <div className="">
      <h3 className="text-2xl font-bold mb-2">Filters</h3>

      <div className="mb-4">
        <h4 className="text-lg font-bold mb-1">Categories</h4>
        <ul>
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i}>
              <input
                type="checkbox"
                name=""
                id={"catetory " + i}
                className="mr-1"
              />
              <label htmlFor={"category " + i}>Category {i + 1}</label>
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
