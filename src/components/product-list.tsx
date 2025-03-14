import { fetchFilteredProducts } from "@/lib/data";
import Products from "./products";

export default async function ProductList({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const products = await fetchFilteredProducts(query, currentPage);

  return <Products products={products} />;
}
