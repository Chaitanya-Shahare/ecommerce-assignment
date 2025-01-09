import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <hr />
      <footer className="max-w-6xl mx-auto">
        <div className="flex ml-[50%]">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="p-4">
              <h2 className="text-lg font-bold">Lorem ipsum</h2>
              <ul className="mt-2 space-y-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <li key={i}>
                    <Link href={"/"} className="">
                      Lorem
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
};
