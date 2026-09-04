import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import sankalpRoutes from "./routes/Sankalproutes.js";
import blogRoutes from "./routes/blogRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/sankalp", sankalpRoutes);
app.use("/api/blog", blogRoutes);
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Global error handler — MUST be last. Catches anything thrown or passed
// to next(err) anywhere above (including multer/cloudinary upload errors)
// and returns JSON instead of Express's default HTML error page. This is
// what was causing "upload failed" with no real reason showing up.
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(err.status || 500).json({
    message: err.message || "Something went wrong on the server",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});