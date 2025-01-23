
import { defineType } from "sanity";

export const products= defineType({
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "discountPercentage", // Move this field above others
      type: "number",
      title: "Dicount Percentage",
    },
    {
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
      type: "string",
    },
    {
      name: "description",
      type: "text",
      validation: (rule) => rule.required(),
      title: "Description",
    },
    {
      name: "productImage",
      type: "image",
      validation: (rule) => rule.required(),
      title: "Product Image",
    },
    {
      name: "price",
      type: "number",
      validation: (rule) => rule.required(),
      title: "Price",
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    },
    {
      name: "isNew",
      type: "boolean",
      title: "New Badge",
    },
    {
      name: "priceWithoutDiscount",
      type: "number",
      title: "Price Without Discount",
    },
    {
      name: "rating",
      type: "number",
      title: "Rating",
    },
    {
      name: "ratingCount",
      type: "number",
      title: "Rating Count",
    },
    {
      name: "sizes",
      type: "array",
      title: "Sizes",
      of: [{ type: "string" }],
    },
  ],
});
