"use client";

import React from "react";
import ProductCard from "./product-card";
import Product from "@/entities/Product";
import { useFilterStore } from "@/stores/filterStore";
import ProductListLayout from "./product-list-layout";

const Products = ({ products }: { products: Product[] }) => {
  const { category, minPrice, maxPrice } = useFilterStore();

  const filteredProducts = products.filter((product) => {
    if (
      category &&
      category !== "all" &&
      product.category.slug.toLocaleLowerCase() !== category.toLocaleLowerCase()
    )
      return false;
    if (minPrice !== "" && product.price < Number(minPrice)) return false;
    if (maxPrice !== "" && product.price > Number(maxPrice)) return false;
    return true;
  });

  return (
    <>
      {filteredProducts?.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">No products found</h3>
          <p className="text-muted-foreground mt-2">
            Try adjusting your filters or search term
          </p>
        </div>
      )}
      <ProductListLayout>
        {filteredProducts?.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductListLayout>
    </>
  );
};

export default Products;
