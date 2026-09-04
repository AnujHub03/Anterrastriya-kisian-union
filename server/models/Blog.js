import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    titleHi: { type: String, default: "" },
    titleEn: { type: String, required: true },
    author: { type: String, default: "" },
    category: {
      type: String,
      enum: ["Policy", "Farming", "Welfare", "Awareness"],
      default: "Policy",
    },
    contentHi: { type: String, default: "" },
    contentEn: { type: String, required: true },
    readTime: { type: Number, default: 1 },
  },
  { timestamps: true } // gives us createdAt to sort by / use as "date"
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;