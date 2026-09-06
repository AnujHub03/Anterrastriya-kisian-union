import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/Authroutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import sankalpRoutes from "./routes/Sankalproutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import memberRoutes from "./routes/Memberroutes.js";
dotenv.config();

connectDB();

const app = express();

const allowedOrigins = [
  "http://localhost:5173", // Vite local frontend
  "http://localhost:3000", // React/other local frontend
  "https://anterrastriya-kisian-union.vercel.app", // Your Vercel frontend
  "https://www.anterrastriyakisanunion.com"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (Postman, mobile apps, etc.)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/sankalp", sankalpRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/members", memberRoutes);
app.get("/", (req, res) => {
  res.send("API is running...");
});

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