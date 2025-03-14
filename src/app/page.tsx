import Pagination from "@/components/pagination";
import ProductList from "@/components/product-list";
import ProductListLayout from "@/components/product-list-layout";
import ProductSearch from "@/components/product-search";
import ProductSkeleton from "@/components/product-skeleton";
import { fetchProductsPage } from "@/lib/data";
import { Suspense } from "react";

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchProductsPage(query);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-6 mb-6">
        <h1 className="text-3xl font-bold">Product Catalog</h1>
        <div className="flex gap-4 justify-between">
          <ProductSearch />
          {/* <ProductFilters /> */}
        </div>
      </div>
      <Suspense
        key={query + currentPage}
        fallback={
          <ProductListLayout>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <ProductSkeleton key={item} />
            ))}
          </ProductListLayout>
        }
      >
        <ProductList currentPage={currentPage} query={query} />
      </Suspense>
      {totalPages > 1 && <Pagination totalPages={totalPages} />}
    </main>
  );
}
