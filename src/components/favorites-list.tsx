"use client";

import ProductCard from "@/components/product-card";
import ProductListLayout from "@/components/product-list-layout";
import { Button } from "@/components/ui/button";
import { useFavoriteStore } from "@/stores/favoritesStore";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function FavoritesList() {
  const { favorites } = useFavoriteStore();

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <Heart className="h-16 w-16 text-muted-foreground" />
        <h2 className="text-xl font-medium">No favorites yet</h2>
        <p className="text-muted-foreground text-center max-w-md">
          Add products to your favorites by clicking the heart icon on any
          product card
        </p>
        <Link href="/">
          <Button variant="outline">Browse Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <ProductListLayout>
      {favorites.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductListLayout>
  );
}
