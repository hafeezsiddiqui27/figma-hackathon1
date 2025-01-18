
// // import { defineType } from 'sanity';

// // export default defineType({
// //   name: 'product',
// //   type: 'document',
// //   title: 'Product',
// //   fields: [
// //     {
// //       name: 'title',
// //       type: 'string',
// //       title: 'Title',
// //       validation: (Rule) => Rule.required().max(100),
// //     },
// //     {
// //       name: 'rating',
// //       type: 'number',
// //       title: 'Rating',
// //       validation: (Rule) => Rule.min(0).max(5),
// //       description: 'Rating of the product (out of 5)',
// //     },
// //     {
// //       name: 'price',
// //       type: 'number',
// //       title: 'Price',
// //       validation: (Rule) => Rule.required().min(0),
// //     },
// //     // {
// //     //   name: 'stockQuantity',
// //     //   type: 'number',
// //     //   title: 'Stock Quantity',
// //     //   validation: (Rule) => Rule.required().min(0),
// //     //   description: 'Number of items available in stock',
// //     // },
// //     {
// //       name: 'availability',
// //       type: 'string',
// //       title: 'Availability',
// //       options: {
// //         list: [
// //           { title: 'In Stock', value: 'in-stock' },
// //           { title: 'Out of Stock', value: 'out-of-stock' },
// //         ],
// //       },
// //       validation: (Rule) => Rule.required(),
// //     },
// //     {
// //       name: 'description',
// //       type: 'text',
// //       title: 'Description',
// //       validation: (Rule) => Rule.max(500),
// //     },
// //     {
// //       name: 'availableColors',
// //       type: 'array',
// //       title: 'Available Colors',
// //       of: [{ type: 'string' }],
// //       options: {
// //         layout: 'tags',
// //       },
// //       },
// //       {
// //         name: 'slug',
// //         type: 'slug',
// //         title: 'Slug',
// //         description: 'The URL-friendly identifier for this product',
// //         options: {
// //           source: 'title', 
// //           maxLength: 96,
// //         },
// //       },
// //     {
// //       name: 'images',
// //       type: 'array',
// //       title: 'Images',
// //       of: [{ type: 'image' }],
// //       options: {
// //         hotspot: true,
// //       },
// //     },
// //   ],
// // });

// // // import { TrolleyIcon } from '@sanity/icons';
// // // import { defineField, defineType } from 'sanity';

// // // export const productTypes = defineType({
// // //   name: 'product',
// // //   title: 'Products',
// // //   type: 'document',
// // //   icon: TrolleyIcon,
// // //   fields: [
// // //     defineField({
// // //       name: 'name',
// // //       title: 'Product Name',
// // //       type: 'string',
// // //       validation: (Rule) => Rule.required(),
// // //     }),
// // //     defineField({
// // //       name: 'slug',
// // //       title: 'Slug',
// // //       type: 'slug',
// // //       options: {
// // //         source: 'name',
// // //         maxLength: 96,
// // //       },
// // //       validation: (Rule) => Rule.required(),
// // //     }),
// // //     defineField({
// // //       name: 'image',
// // //       title: 'Product Image',
// // //       type: 'image',
// // //       options: {
// // //         hotspot: true,
// // //       },
// // //       validation: (Rule) => Rule.required(),
// // //     }),
// // //     defineField({
// // //       name: 'additionalImages',
// // //       title: 'Additional Images',
// // //       type: 'array',
// // //       of: [{ type: 'image', options: { hotspot: true } }],
// // //     }),
// // //     defineField({
// // //       name: 'description',
// // //       title: 'Description',
// // //       type: 'text', // Use simple text field for description
// // //     }),
// // //     defineField({
// // //       name: 'price',
// // //       title: 'Price',
// // //       type: 'number',
// // //       validation: (Rule) => Rule.required().min(0),
// // //     }),
// // //     defineField({
// // //       name: 'discountPrice',
// // //       title: 'Discount Price',
// // //       type: 'number',
// // //       description: 'Discounted price of the product (optional)',
// // //       validation: (Rule) =>
// // //         Rule.custom((discountPrice, context) => {
// // //           const doc = context.document;

// // //           if (doc && typeof doc.price === 'number') {
// // //             if (discountPrice && discountPrice >= doc.price) {
// // //               return 'Discount price must be less than the original price';
// // //             }
// // //           }
// // //           return true;
// // //         }),
// // //     }),
// // //     defineField({
// // //       name: 'stock',
// // //       title: 'Stock',
// // //       type: 'number',
// // //       validation: (Rule) => Rule.required().min(0),
// // //     }),
// // //     defineField({
// // //       name: 'rating',
// // //       title: 'Rating',
// // //       type: 'number',
// // //       description: 'Rating from 0 to 5',
// // //       validation: (Rule) => Rule.min(0).max(5).precision(1),
// // //     }),
// // //     defineField({
// // //       name: 'reviews',
// // //       title: 'Reviews Count',
// // //       type: 'number',
// // //       description: 'Number of reviews for the product',
// // //       validation: (Rule) => Rule.required().min(0),
// // //     }),
// // //   ],
// // //   preview: {
// // //     select: {
// // //       title: 'name',
// // //       media: 'image',
// // //       subtitle: 'price',
// // //     },
// // //     prepare({ title, subtitle, media }) {
// // //       return {
// // //         title,
// // //         subtitle: `$${subtitle}`,
// // //         media,
// // //       };
// // //     },
// // //   },
// // // });
// import { defineType } from 'sanity';

// export default defineType({
//   name: 'product',
//   type: 'document',
//   title: 'Product',
//   fields: [
//     {
//       name: 'title',
//       type: 'string',
//       title: 'Title',
//       validation: (Rule) => Rule.required().max(100),
//     },
//     {
//       name: 'rating',
//       type: 'number',
//       title: 'Rating',
//       validation: (Rule) => Rule.min(0).max(5),
//       description: 'Rating of the product (out of 5)',
//     },
//     {
//       name: 'slug',
//       type: 'slug',
//       title: 'Slug',
//       description: 'Automatically generated slug based on product ID',
//       options: {
//         source: (doc) => doc._id, 
//         slugify: (input) => input.toLowerCase().replace(/\s+/g, '-'),  
//         maxLength: 128,  
//       },
//     }
// ,    
//     {
//       name: 'price',
//       type: 'number',
//       title: 'Price',
//       validation: (Rule) => Rule.required().min(0),
//     },
//     {
//       name: 'discountedprice',
//       type: 'number',
//       title: 'discountedprice',
//       validation: (Rule) => Rule.required().min(0),
//     },
//     {
//       name: 'availability',
//       type: 'string',
//       title: 'Availability',
//       options: {
//         list: [
//           { title: 'In Stock', value: 'in-stock' },
//           { title: 'Out of Stock', value: 'out-of-stock' },
//         ],
//       },
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'description',
//       type: 'text',
//       title: 'Description',
//       validation: (Rule) => Rule.max(500),
//     },
//     {
//       name: 'availableColors',
//       type: 'array',
//       title: 'Available Colors',
//       of: [{ type: 'string' }],
//       options: {
//         layout: 'tags',
//       },
//     },
    
//     // {
//     //   name: 'slug',
//     //   type: 'slug',
//     //   title: 'Slug',
//     //   description: 'The URL-friendly identifier for this product',
//     //   options: {
//     //     source: 'title', // Automatically generates slug from title
//     //     maxLength: 96,
//     //   },
//     //   validation: (Rule) => Rule.required(),
//     // },
//     {
//       name: 'images',
//       type: 'array',
//       title: 'Images',
//       of: [{ type: 'image', options: { hotspot: true } }],
//     },
//   ],
//   preview: {
//     select: {
//       title: 'title',
//       media: 'images.0', // Shows the first image as preview media
//       subtitle: 'price',
//     },
//     prepare({ title, media, subtitle }) {
//       return {
//         title,
//         media,
//         subtitle: `$${subtitle}`,
//       };
//     },
//   },
// });
