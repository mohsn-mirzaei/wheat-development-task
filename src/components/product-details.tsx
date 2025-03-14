import { Button } from "@/components/ui/button";
import Product from "@/entities/Product";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function ProductDetails({ product }: { product: Product }) {
  const isFavorite = false;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-contain rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>

          <div className="bg-muted p-2 rounded text-sm inline-block w-fit">
            Category: {product.category.name}
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="icon">
                -
              </Button>
              <span className="w-12 text-center">{1}</span>
              <Button variant="ghost" size="icon">
                +
              </Button>
            </div>

            <Button className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>

            <Button
              variant="outline"
              size="icon"
              aria-label={
                isFavorite ? "Remove from favorites" : "Add to favorites"
              }
            >
              <Heart
                className={`h-5 w-5 ${
                  isFavorite ? "fill-red-500 text-red-500" : ""
                }`}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
