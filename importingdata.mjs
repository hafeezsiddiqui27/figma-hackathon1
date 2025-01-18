// import { createClient } from "@sanity/client";

// // const client = createClient({
// //   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
// //   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
// //   useCdn: true, // Set to false if you need fresh data
// //   apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
// //   token: process.env.SANITY_AUTH_TOKEN, // Only include this if you need authenticated requests
// // });
// // console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// dotenv.config({ path: path.resolve(__dirname, "../.env.local") });
// // Create Sanity client
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN,
//   apiVersion: "2021-08-31",
// });
// async function uploadImageToSanity(imageUrl) {
//   try {
//     console.log(`Uploading image: ${imageUrl}`);

//     const response = await fetch(imageUrl);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch image: ${imageUrl}`);
//     }

//     const buffer = await response.arrayBuffer();
//     const bufferImage = Buffer.from(buffer);

//     const asset = await client.assets.upload("image", bufferImage, {
//       filename: imageUrl.split("/").pop(),
//     });

//     console.log(`Image uploaded successfully: ${asset._id}`);
//     return asset._id;
//   } catch (error) {
//     console.error("Failed to upload image:", imageUrl, error);
//     return null;
//   }
// }

// async function uploadProduct(product) {
//   try {
//     const imageId = await uploadImageToSanity(product.imageUrl);

//     if (imageId) {
//       const document = {
//         _type: "product",
//         title: product.title,
//         price: product.price,
//         productImage: {
//           _type: "image",
//           asset: {
//             _ref: imageId,
//           },
//         },
//         tags: product.tags,
//         dicountPercentage: product.dicountPercentage, // Typo in field name: dicountPercentage -> discountPercentage
//         description: product.description,
//         isNew: product.isNew,
//       };

//       const createdProduct = await client.create(document);
//       console.log(
//         `Product ${product.title} uploaded successfully:`,
//         createdProduct
//       );
//     } else {
//       console.log(
//         `Product ${product.title} skipped due to image upload failure.`
//       );
//     }
//   } catch (error) {
//     console.error("Error uploading product:", error);
//   }
// }

// async function importProducts() {
//   try {
//     const response = await fetch(
//       "https://template6-six.vercel.app/api/products"
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const products = await response.json();

//     for (const product of products) {
//       await uploadProduct(product);
//     }
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }
// }

// importProducts();
import { createClient } from "@sanity/client";
import axios from "axios";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2021-08-31",
});

// Upload image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data);

    // Ensure image upload works by providing the image buffer and filename
    const asset = await client.assets.upload("image", buffer, {
      filename: imageUrl.split("/").pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error("Failed to upload image:", imageUrl, error);
    return null;
  }
}

// Import data
async function importData() {
  try {
    console.log("Fetching products from API...");
    const response = await axios.get(
      "https://template6-six.vercel.app/api/products"
    );
    const products = response.data;

    console.log(`Fetched ${products.length} products`);

    for (const product of products) {
      console.log(`Processing product: ${product.title}`);
      let imageRef = null;

      // Check for image URL and upload if exists
      if (product.imageUrl) {
        imageRef = await uploadImageToSanity(product.imageUrl);
      }

      // Map product fields to Sanity schema
      const sanityProduct = {
        _type: "producting", // Use the correct type for your schema
        name: product.title,
        description: product.description,
        price: product.price,
        dicountPercentage: product.dicountPercentage || 0, // Ensure field name matches schema
        priceWithoutDiscount: product.price, // Use the price as price without discount
        isNew: product.isNew || false,
        tags: product.tags || [], // Ensure tags exist in the product object
        productImage: imageRef
          ? {
              _type: "image",
              asset: {
                _type: "reference",
                _ref: imageRef,
              },
            }
          : undefined,
        rating: product.rating || 0, // Assuming 'rating' field exists in product
        ratingCount: product.ratingCount || 0, // Assuming 'ratingCount' exists in product
        sizes: product.sizes || [], // Ensure 'sizes' is present in the product object
      };

      console.log("Uploading product to Sanity:", sanityProduct.name);
      const result = await client.create(sanityProduct);
      console.log(`Product uploaded successfully: ${result._id}`);
    }

    console.log("Data import completed successfully!");
  } catch (error) {
    console.error("Error importing data:", error);
  }
}

// Execute the import
importData();
