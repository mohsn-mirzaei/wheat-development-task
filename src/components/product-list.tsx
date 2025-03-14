import Product from "@/entities/Product";
import { fetchFilteredProducts } from "@/lib/data";
import ProductCard from "./product-card";
import ProductListLayout from "./product-list-layout";

export default async function ProductList({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const products = await fetchFilteredProducts(query, currentPage);

  return (
    <div className="grid gap-6">
      {products?.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">No products found</h3>
          <p className="text-muted-foreground mt-2">
            Try adjusting your filters or search term
          </p>
        </div>
      ) : (
        <ProductListLayout>
          {products?.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductListLayout>
      )}
    </div>
  );
}
