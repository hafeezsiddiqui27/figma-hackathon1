// // // // import { defineType } from "sanity";

// // // // export const producting = defineType({
// // // //   name: "producting",
// // // //   title: "Producting",
// // // //   type: "document",
// // // //   fields: [
// // // //     {
// // // //       name: "name",
// // // //       title: "Title",
// // // //       validation: (rule) => rule.required(),
// // // //       type: "string",
// // // //     },
// // // //     {
// // // //       name: "description",
// // // //       type: "text",
// // // //       validation: (rule) => rule.required(),
// // // //       title: "Description",
// // // //     },
// // // //     {
// // // //       name: "productImage",
// // // //       type: "image",
// // // //       validation: (rule) => rule.required(),
// // // //       title: "Product Image",
// // // //     },
// // // //     {
// // // //       name: "price",
// // // //       type: "number",
// // // //       validation: (rule) => rule.required(),
// // // //       title: "Price",
// // // //     },
// // // //     {
// // // //       name: "tags",
// // // //       type: "array",
// // // //       title: "Tags",
// // // //       of: [{ type: "string" }],
// // // //     },
// // // //     {
// // // //       name: "dicountPercentage",
// // // //       type: "number",
// // // //       title: "Discount Percentage",
// // // //     },
// // // //     {
// // // //       name: "isNew",
// // // //       type: "boolean",
// // // //       title: "New Badge",
// // // //     },
// // // //   ],
// // // // });
// // // import { defineType } from "sanity";

// // // export const producting = defineType({
// // //   name: "producting",
// // //   title: "Producting",
// // //   type: "document",
// // //   fields: [
// // //     {
// // //       name: "name",
// // //       title: "Title",
// // //       validation: (rule) => rule.required(),
// // //       type: "string",
// // //     },
// // //     {
// // //       name: "description",
// // //       type: "text",
// // //       validation: (rule) => rule.required(),
// // //       title: "Description",
// // //     },
// // //     {
// // //       name: "productImage",
// // //       type: "image",
// // //       validation: (rule) => rule.required(),
// // //       title: "Product Image",
// // //     },
// // //     {
// // //       name: "price",
// // //       type: "number",
// // //       validation: (rule) => rule.required(),
// // //       title: "Price",
// // //     },
// // //     {
// // //       name: "tags",
// // //       type: "array",
// // //       title: "Tags",
// // //       of: [{ type: "string" }],
// // //     },
// // //     {
// // //       name: "discountPercentage", // Notice this field name contains a typo "dicount"
// // //       type: "number",
// // //       title: "Discount Percentage",
// // //     },
// // //     {
// // //       name: "isNew",
// // //       type: "boolean",
// // //       title: "New Badge",
// // //     },
// // //   ],
// // // });
// // import { defineType } from "sanity";

// // export const producting = defineType({
// //   name: "producting",
// //   title: "Producting",
// //   type: "document",
// //   fields: [
// //     {
// //       name: "name",
// //       title: "Title",
// //       validation: (rule) => rule.required(),
// //       type: "string",
// //     },
// //     {
// //       name: "description",
// //       type: "text",
// //       validation: (rule) => rule.required(),
// //       title: "Description",
// //     },
// //     {
// //       name: "productImage",
// //       type: "image",
// //       validation: (rule) => rule.required(),
// //       title: "Product Image",
// //     },
// //     {
// //       name: "price",
// //       type: "number",
// //       validation: (rule) => rule.required(),
// //       title: "Price",
// //     },
// //     {
// //       name: "tags",
// //       type: "array",
// //       title: "Tags",
// //       of: [{ type: "string" }],
// //     },
// //     {
// //       name: "dicountPercentage", // Notice this field name contains a typo "dicount"
// //       type: "number",
// //       title: "Discount Percentage",
// //     },
// //     {
// //       name: "isNew",
// //       type: "boolean",
// //       title: "New Badge",
// //     },
// //     // New field for price without discount
// //     {
// //       name: "priceWithoutDiscount",
// //       type: "number",
// //       title: "Price Without Discount",
// //     },
// //     // New field for rating
// //     {
// //       name: "rating",
// //       type: "number",
// //       title: "Rating",
// //     },
// //     // New field for rating count
// //     {
// //       name: "ratingCount",
// //       type: "number",
// //       title: "Rating Count",
// //     },
// //     // New field for sizes
// //     {
// //       name: "sizes",
// //       type: "array",
// //       title: "Sizes",
// //       of: [{ type: "string" }],
// //     },
// //   ],
// // });
// import { defineType } from "sanity";

// export const producting = defineType({
//   name: "producting",
//   title: "Producting",
//   type: "document",
//   fields: [
//     {
//       name: "name",
//       title: "Title",
//       validation: (rule) => rule.required(),
//       type: "string",
//     },
//     {
//       name: "description",
//       type: "text",
//       validation: (rule) => rule.required(),
//       title: "Description",
//     },
//     {
//       name: "productImage",
//       type: "image",
//       validation: (rule) => rule.required(),
//       title: "Product Image",
//     },
//     {
//       name: "price",
//       type: "number",
//       validation: (rule) => rule.required(),
//       title: "Price",
//     },
//     {
//       name: "tags",
//       type: "array",
//       title: "Tags",
//       of: [{ type: "string" }],
//     },
//     {
//       name: "discountPercentage", // Notice this field name contains a typo "dicount"
//       type: "number",
//       title: "Discount Percentage",
//     },
//     {
//       name: "isNew",
//       type: "boolean",
//       title: "New Badge",
//     },
//     // New field for price without discount
//     {
//       name: "priceWithoutDiscount",
//       type: "number",
//       title: "Price Without Discount",
//     },
//     // New field for rating
//     {
//       name: "rating",
//       type: "number",
//       title: "Rating",
//     },
//     // New field for rating count
//     {
//       name: "ratingCount",
//       type: "number",
//       title: "Rating Count",
//     },
//     // New field for sizes
//     {
//       name: "sizes",
//       type: "array",
//       title: "Sizes",
//       of: [{ type: "string" }],
//     },
//   ],
// });
import { defineType } from "sanity";

export const producting = defineType({
  name: "producting",
  title: "Producting",
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
