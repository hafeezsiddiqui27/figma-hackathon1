import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

// Load environment variables from .env.local
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

// Function to delete documents of a given type
async function deleteDocumentsOfType(documentType) {
  try {
    // Fetch documents of the given type
    const query = `*[_type == "${documentType}"]`; // Adjust the query if needed
    const documents = await client.fetch(query);

    if (documents.length === 0) {
      console.log(`No documents found for type: ${documentType}`);
      return;
    }

    console.log(`Found ${documents.length} documents of type ${documentType}`);

    // Delete each document
    for (const doc of documents) {
      await client.delete(doc._id);
      console.log(`Deleted document with ID: ${doc._id}`);
    }

    console.log(
      `All ${documents.length} documents of type ${documentType} have been deleted.`
    );
  } catch (error) {
    console.error("Error deleting documents:", error);
  }
}

// Start deleting process
deleteDocumentsOfType("producting"); // Change to your document type
