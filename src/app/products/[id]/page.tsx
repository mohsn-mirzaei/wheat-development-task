import { notFound } from "next/navigation";
import ProductDetails from "@/components/product-details";
import { fetchProduct } from "@/lib/data";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    const product = await fetchProduct(id);

    if (!product) {
      return notFound();
    }

    return <ProductDetails product={product} />;
  } catch (error) {
    console.error("Error fetching product:", error);
    return notFound();
  }
}
