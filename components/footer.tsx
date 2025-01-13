import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <hr />
      <footer className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between p-4">
          <h2 className="font-bold text-2xl md:text-3xl">E-Commerce App</h2>
          {Array.from({ length: 3 }).map((_, i: number) => (
            <div key={i} className="p-4">
              <h2 className="text-lg font-bold underline underline-offset-4">Lorem ipsum</h2>
              <ul className="mt-2 space-y-2">
                {Array.from({ length: 5 }).map((_, i: number) => (
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
