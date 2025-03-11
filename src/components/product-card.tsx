import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { StarRating } from "@/components/star-rating";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Product from "@/entities/Product";

export default function ProductCard({ product }: { product: Product }) {
  const isFavorite = false;

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-square">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-contain transition-transform hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full"
          // onClick={() => console.log("Toggle favorite")}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite ? "fill-red-500 text-red-500" : ""
            }`}
          />
        </Button>
      </div>
      <CardContent className="flex-grow p-4">
        <div className="flex justify-between items-start gap-2">
          <Link href={`/products/${product.id}`} className="hover:underline">
            <h3 className="font-medium line-clamp-2">{product.title}</h3>
          </Link>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <StarRating rating={product.rating.rate} />
          <span className="text-sm text-muted-foreground">
            ({product.rating.rate})
          </span>
        </div>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <div className="flex justify-between items-center w-full">
          <span className="font-bold">${product.price.toFixed(2)}</span>
          <span className="text-xs text-muted-foreground">
            {product.category}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
