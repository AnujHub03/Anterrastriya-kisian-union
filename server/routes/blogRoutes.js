import express from "express";
import Blog from "../models/Blog.js";

// ASSUMPTION: same as Sankalp routes — no auth middleware yet since you
// don't have protected routes set up. Add `protect, admin` in front of
// the POST/PUT/DELETE handlers once you build that out.

const router = express.Router();

// GET /api/blog
// Public. Returns all posts, newest first.
router.get("/", async (req, res, next) => {
  try {
    const posts = await Blog.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

// POST /api/blog
// Admin. Creates a new post.
router.post("/", async (req, res, next) => {
  try {
    const { titleHi, titleEn, author, category, contentHi, contentEn } = req.body;

    if (!titleEn || !contentEn) {
      return res.status(400).json({ message: "titleEn and contentEn are required" });
    }

    const readTime = Math.ceil(contentEn.split(" ").length / 200) || 1;

    const post = await Blog.create({
      titleHi,
      titleEn,
      author,
      category,
      contentHi,
      contentEn,
      readTime,
    });

    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
});

// PUT /api/blog/:id
// Admin. Updates an existing post.
router.put("/:id", async (req, res, next) => {
  try {
    const { titleHi, titleEn, author, category, contentHi, contentEn } = req.body;

    const update = { titleHi, titleEn, author, category, contentHi, contentEn };
    if (contentEn) {
      update.readTime = Math.ceil(contentEn.split(" ").length / 200) || 1;
    }

    const post = await Blog.findByIdAndUpdate(req.params.id, update, {
      new: true,
      runValidators: true,
    });

    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/blog/:id
// Admin. Deletes a post.
router.delete("/:id", async (req, res, next) => {
  try {
    const post = await Blog.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json({ message: "Post deleted" });
  } catch (err) {
    next(err);
  }
});

export default router;