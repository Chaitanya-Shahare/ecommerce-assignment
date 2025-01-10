import { Card } from "@/components/card";
import { Filter } from "@/components/filter";

// {
//       id: 6,
//       title: 'Huawei P30',
//       description: 'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
//       price: 499,
//       rating: 4.09,
//       category: 'smartphones',
//       image: 'https://i.dummyjson.com/data/products/5/1.jpg',
//       __v: 0
//     }

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  image: string;
  __v: number;
}

export default async function Home() {
  let data = {
    products: [],
  };
  try {
    const response = await fetch(
      "https://fake-ecommerce-app-api.onrender.com/products?limit=100&page=1&category=smartphones,laptops&minPrice=0&maxPrice=5000"
    );
    data = await response.json();
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="max-w-6xl mx-auto p-4 min-h-[60vh]">
      <div className="grid grid-cols-[1fr,2fr] gap-4">
        <Filter />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {data.products.map((product: IProduct, i: number) => (
            <Card key={i} title={product.title} price={product.price} />
          ))}
        </div>
      </div>
    </div>
  );
}
