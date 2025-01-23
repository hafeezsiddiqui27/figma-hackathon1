// import { type SchemaTypeDefinition } from 'sanity'

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [],
// }
// sanity/schema.ts
import { type SchemaTypeDefinition } from "sanity";

import product from "../pro";
import { products } from "../products";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, products],
};
