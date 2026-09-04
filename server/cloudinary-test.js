// Run this directly to test your Cloudinary credentials with nothing else
// in the way: node cloudinary-test.js
//
// Put it anywhere, make sure your real CLOUDINARY_* values are in a .env
// file right next to it (or hardcode them here temporarily to test).

import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("Testing with:");
console.log("  cloud_name:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("  api_key:", process.env.CLOUDINARY_API_KEY);
console.log("  api_secret:", process.env.CLOUDINARY_API_SECRET ? "(set, hidden)" : "MISSING");

try {
  // Uploads Cloudinary's own public sample image — no local file needed.
  const result = await cloudinary.uploader.upload(
    "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    { folder: "gallery-test" }
  );
  console.log("\n✅ SUCCESS — your Cloudinary credentials work fine.");
  console.log("Uploaded URL:", result.secure_url);
} catch (err) {
  console.log("\n❌ FAILED — this confirms it's a Cloudinary account/credentials issue, not your app code.");
  console.log(err);
}