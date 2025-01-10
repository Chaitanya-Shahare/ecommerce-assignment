import { Card } from "@/components/card";
import { Filter } from "@/components/filter";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-4 min-h-[60vh]">
      <div className="grid grid-cols-[1fr,2fr] gap-4">
        <Filter />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <Card key={i} title="Product 1" price="$ 88" />
          ))}
        </div>
      </div>
    </div>
  );
}
