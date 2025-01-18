// lib/fetchProducts.ts
import { client } from "@/sanity/lib/client";

export async function fetchProducts(limit: number = 10, filters?: string) {
  const query = `
    *[_type == "product"${filters ? ` && ${filters}` : ""}] | order(_createdAt desc)[0...${limit}] {
      title,
      slug,
      price,
      "image": images[0].asset->url
    }
  `;
  const products = await client.fetch(query);
  return products;
}
