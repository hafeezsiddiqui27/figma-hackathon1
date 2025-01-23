// // // // import { createClient } from "@sanity/client";
// // // // import axios from "axios";
// // // // import dotenv from "dotenv";
// // // // import { fileURLToPath } from "url";
// // // // import path from "path";

// // // // // Load environment variables from .env.local
// // // // const __filename = fileURLToPath(import.meta.url);
// // // // const __dirname = path.dirname(__filename);
// // // // dotenv.config({ path: path.resolve(__dirname, "../.env.local") });
// // // // // Create Sanity client
// // // // const client = createClient({
// // // //   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
// // // //   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
// // // //   useCdn: false,
// // // //   token: process.env.SANITY_API_TOKEN,
// // // //   apiVersion: "2021-08-31",
// // // // });
// // // // async function uploadImageToSanity(imageUrl) {
// // // //   try {
// // // //     console.log(`Uploading image: ${imageUrl}`);
// // // //     const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
// // // //     const buffer = Buffer.from(response.data);
// // // //     const asset = await client.assets.upload("image", buffer, {
// // // //       filename: imageUrl.split("/").pop(),
// // // //     });
// // // //     console.log(`Image uploaded successfully: ${asset._id}`);
// // // //     return asset._id;
// // // //   } catch (error) {
// // // //     console.error("Failed to upload image:", imageUrl, error);
// // // //     return null;
// // // //   }
// // // // }
// // // // async function importData() {
// // // //   try {
// // // //     console.log("Fetching products from API...");
// // // //     // const response = await axios.get("https://fakestoreapi.com/products");
// // // //     const response = await axios.get("https://template6-six.vercel.app/api/products");
// // // //     const products = response.data;
// // // //     console.log(`Fetched ${products.length} products`);
// // // //     for (const product of products) {
// // // //       console.log(`Processing product: ${product.title}`);
// // // //       let imageRef = null;
// // // //       if (product.image) {
// // // //         imageRef = await uploadImageToSanity(product.image);
// // // //       }
// // // //       const sanityProduct = {
// // // //         _type: "product",
// // // //         name: product.title,
// // // //         description: product.description,
// // // //         price: product.price,
// // // //         discountPercentage: 0,
// // // //         priceWithoutDiscount: product.price,
// // // //         rating: product.rating?.rate || 0,
// // // //         ratingCount: product.rating?.count || 0,
// // // //         tags: product.category ? [product.category] : [],
// // // //         sizes: [],
// // // //         image: imageRef
// // // //           ? {
// // // //               _type: "image",
// // // //               asset: {
// // // //                 _type: "reference",
// // // //                 _ref: imageRef,
// // // //               },
// // // //             }
// // // //           : undefined,
// // // //       };
// // // //       console.log("Uploading product to Sanity:", sanityProduct.name);
// // // //       const result = await client.create(sanityProduct);
// // // //       console.log(`Product uploaded successfully: ${result._id}`);
// // // //     }
// // // //     console.log("Data import completed successfully!");
// // // //   } catch (error) {
// // // //     console.error("Error importing data:", error);
// // // //   }
// // // // }
// // // // importData();
// // // import { createClient } from "@sanity/client";
// // // import axios from "axios";
// // // import dotenv from "dotenv";
// // // import { fileURLToPath } from "url";
// // // import path from "path";

// // // // Load environment variables from .env.local
// // // const __filename = fileURLToPath(import.meta.url);
// // // const __dirname = path.dirname(__filename);
// // // dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

// // // // Create Sanity client
// // // const client = createClient({
// // //   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
// // //   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
// // //   useCdn: false,
// // //   token: process.env.SANITY_API_TOKEN,
// // //   apiVersion: "2021-08-31",
// // // });

// // // // Upload image to Sanity
// // // async function uploadImageToSanity(imageUrl) {
// // //   try {
// // //     console.log(`Uploading image: ${imageUrl}`);
// // //     const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
// // //     const buffer = Buffer.from(response.data);

// // //     const asset = await client.assets.upload("image", buffer, {
// // //       filename: imageUrl.split("/").pop(),
// // //     });

// // //     console.log(`Image uploaded successfully: ${asset._id}`);
// // //     return asset._id;
// // //   } catch (error) {
// // //     console.error("Failed to upload image:", imageUrl, error);
// // //     return null;
// // //   }
// // // }

// // // // Import data
// // // async function importData() {
// // //   try {
// // //     console.log("Fetching products from API...");
// // //     const response = await axios.get(
// // //       "https://template6-six.vercel.app/api/products"
// // //     );
// // //     const products = response.data;

// // //     console.log(`Fetched ${products.length} products`);

// // //     for (const product of products) {
// // //       console.log(`Processing product: ${product.title}`);
// // //       let imageRef = null;

// // //       // Upload image if it exists
// // //       if (product.image) {
// // //         imageRef = await uploadImageToSanity(product.image);
// // //       }

// // //       // Map product fields to Sanity schema
// // //       const sanityProduct = {
// // //         _type: "producting", // Use the correct type for your schema
// // //         name: product.title,
// // //         description: product.description,
// // //         price: product.price,
// // //         discountPercentage: product.discountPercentage || 0, // Ensure field exists in schema
// // //         priceWithoutDiscount: product.price,
// // //         rating: product.rating?.rate || 0,
// // //         ratingCount: product.rating?.count || 0,
// // //         tags: product.category ? [product.category] : [],
// // //         sizes: [], // Update or remove if not part of the schema
// // //         image: imageRef
// // //           ? {
// // //               _type: "image",
// // //               asset: {
// // //                 _type: "reference",
// // //                 _ref: imageRef,
// // //               },
// // //             }
// // //           : undefined,
// // //       };

// // //       console.log("Uploading product to Sanity:", sanityProduct.name);
// // //       const result = await client.create(sanityProduct);
// // //       console.log(`Product uploaded successfully: ${result._id}`);
// // //     }

// // //     console.log("Data import completed successfully!");
// // //   } catch (error) {
// // //     console.error("Error importing data:", error);
// // //   }
// // // }

// // // // Execute the import
// // // importData();
// // import { createClient } from "@sanity/client";
// // import axios from "axios";
// // import dotenv from "dotenv";
// // import { fileURLToPath } from "url";
// // import path from "path";

// // // Load environment variables from .env.local
// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);
// // dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

// // // Create Sanity client
// // const client = createClient({
// //   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
// //   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
// //   useCdn: false,
// //   token: process.env.SANITY_API_TOKEN,
// //   apiVersion: "2021-08-31",
// // });

// // // Upload image to Sanity
// // async function uploadImageToSanity(imageUrl) {
// //   try {
// //     console.log(`Uploading image: ${imageUrl}`);

// //     // Fetch image from URL
// //     const response = await axios.get(imageUrl, { responseType: "arraybuffer" });

// //     // Check if the response status is 200 (OK)
// //     if (response.status !== 200) {
// //       console.error(
// //         `Failed to fetch image: ${imageUrl}. Status: ${response.status}`
// //       );
// //       return null;
// //     }

// //     // Convert the response data to a buffer and check its size
// //     const buffer = Buffer.from(response.data);
// //     if (buffer.length === 0) {
// //       console.error(`Image data for ${imageUrl} is empty.`);
// //       return null;
// //     }

// //     // Log the buffer size for debugging purposes
// //     console.log(`Buffer length: ${buffer.length}`);

// //     // Upload image buffer to Sanity and create asset
// //     const asset = await client.assets.upload("image", buffer, {
// //       filename: imageUrl.split("/").pop(),
// //     });

// //     console.log(`Image uploaded successfully: ${asset._id}`);
// //     return asset._id;
// //   } catch (error) {
// //     console.error("Failed to upload image:", imageUrl, error);
// //     return null;
// //   }
// // }

// // // Import data from API and upload to Sanity
// // async function importData() {
// //   try {
// //     console.log("Fetching products from API...");

// //     // Fetch products from your API
// //     const response = await axios.get(
// //       "https://template6-six.vercel.app/api/products"
// //     );
// //     const products = response.data;

// //     console.log(`Fetched ${products.length} products`);

// //     // Iterate over each product
// //     for (const product of products) {
// //       console.log(`Processing product: ${product.title}`);

// //       let imageRef = null;

// //       // Upload image if it exists
// //       if (product.image) {
// //         imageRef = await uploadImageToSanity(product.image);
// //       }

// //       // Map product fields to Sanity schema
// //       const sanityProduct = {
// //         _type: "producting", // Use the correct type for your schema
// //         name: product.title,
// //         description: product.description,
// //         price: product.price,
// //         discountPercentage: product.discountPercentage || 0, // Ensure field exists in schema
// //         priceWithoutDiscount: product.price,
// //         rating: product.rating?.rate || 0,
// //         ratingCount: product.rating?.count || 0,
// //         tags: product.category ? [product.category] : [],
// //         sizes: [], // Update or remove if not part of the schema
// //         // image: imageRef
// //         //   ? {
// //         //       _type: "image",
// //         //       asset: {
// //         //         _type: "reference",
// //         //         _ref: imageRef,
// //         //       },
// //         //     }
// //         //   : undefined,
// //         productImage: {
// //           _type: "image",
// //           asset: {
// //             _ref: imageId,
// //           },
// //         },
// //       };

// //       console.log("Uploading product to Sanity:", sanityProduct.name);

// //       // Upload product to Sanity
// //       const result = await client.create(sanityProduct);
// //       console.log(`Product uploaded successfully: ${result._id}`);
// //     }

// //     console.log("Data import completed successfully!");
// //   } catch (error) {
// //     console.error("Error importing data:", error);
// //   }
// // }

// // // Execute the import
// // importData();
// import { createClient } from "@sanity/client";

// import axios from "axios";
// import dotenv from "dotenv";
// import { fileURLToPath } from "url";
// import path from "path";

// // Load environment variables from .env.local
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
// // const client = createClient({
// //   projectId: "your-project-id",
// //   dataset: "production",
// //   useCdn: true,
// //   apiVersion: "2025-01-13",
// //   token: "your-auth-token",
// // });

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

import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

// Load environment variables from .env.production
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env.local") }); // Ensure this points to production env

// Create Sanity client for production
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Use production project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production", // Default to production dataset
  useCdn: false, // Ensure latest data is fetched
  token: process.env.SANITY_API_TOKEN, // Secure API token for production
  apiVersion: "2025-01-13", // Use latest API version for production
});

// Upload image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload("image", bufferImage, {
      filename: imageUrl.split("/").pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error("Failed to upload image:", imageUrl, error);
    return null;
  }
}

// Upload product data to Sanity (using the 'producting' schema)
async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: "products", // Update schema name here
        // title: product.title,
        // price: product.price,
        title: product.title,
        description: product.description,
        price: product.price,
        discountPercentage: 0,
        priceWithoutDiscount: product.price,
        rating: product.rating?.rate || 0,
        ratingCount: product.rating?.count || 0,
        tags: product.category ? [product.category] : [],
        sizes: [],
        productImage: {
          _type: "image",
          asset: {
            _ref: imageId,
          },
        },
        tags: product.tags,

        isNew: product.isNew,
      };

      const createdProduct = await client.create(document);
      console.log(
        `Product ${product.title} uploaded successfully:`,
        createdProduct
      );
    } else {
      console.log(
        `Product ${product.title} skipped due to image upload failure.`
      );
    }
  } catch (error) {
    console.error("Error uploading product:", error);
  }
}

// Import products from an API
async function importProducts() {
  try {
    const response = await fetch(
      "https://template6-six.vercel.app/api/products"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Start the product import process
importProducts();
