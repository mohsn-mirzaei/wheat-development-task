import Product from "@/entities/Product";

const PAGE_LIMIT = 8;

function buildQueryParams(
  query: string,
  limit?: number,
  offset?: number
): URLSearchParams {
  const params = new URLSearchParams();
  if (query) params.set("title", query);
  if (limit !== undefined) params.set("limit", limit.toString());
  if (offset !== undefined) params.set("offset", offset.toString());
  return params;
}

export async function fetchFilteredProducts(
  query: string,
  page = 1
): Promise<Product[]> {
  const offset = (page - 1) * PAGE_LIMIT;
  const params = buildQueryParams(query, PAGE_LIMIT, offset);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/products?${params.toString()}`
  );

  return res
    .json()
    .catch(() => Promise.reject(new Error("Error fetching data")));
}

export async function fetchProductsPage(query: string): Promise<number> {
  const params = buildQueryParams(query);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/products?${params.toString()}`
  );
  const products: Product[] = await res
    .json()
    .catch(() => Promise.reject(new Error("Error fetching data")));

  return Math.ceil(products.length / PAGE_LIMIT);
}
