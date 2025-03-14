"use client";
import Product from "@/entities/Product";
import { useFavoriteStore } from "@/stores/favoritesStore";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const FavoriteButton = ({
  product,
  type,
}: {
  product: Product;
  type: "card" | "details";
}) => {
  const { favorites, toggleFavorite } = useFavoriteStore();
  const isFavorite = favorites.some((fav) => fav.id === product.id);

  const isCard = type === "card";

  return (
    <Button
      variant={isCard ? "ghost" : "outline"}
      size="icon"
      className={cn({
        "absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full":
          isCard,
      })}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      onClick={() => toggleFavorite(product)}
    >
      <Heart
        className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`}
      />
    </Button>
  );
};

export default FavoriteButton;
