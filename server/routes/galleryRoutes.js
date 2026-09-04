import express from "express";
import Photo from "../models/Photo.js";
import Video from "../models/Video.js";
import upload from "../middleware/upload.js";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

/* ------------------------------- PHOTOS -------------------------------- */

router.get("/photos", async (req, res) => {
  try {
    const photos = await Photo.find().sort({ createdAt: -1 });
    res.json(photos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/photos", upload.single("photo"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No photo file uploaded" });
    }

    const photo = await Photo.create({
      url: req.file.path,
      publicId: req.file.filename,
      caption: req.body.caption || "",
    });

    res.status(201).json(photo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/photos/:id", async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.id);
    if (!photo) return res.status(404).json({ message: "Photo not found" });

    await cloudinary.uploader.destroy(photo.publicId);
    await photo.deleteOne();

    res.json({ message: "Photo deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ------------------------------- VIDEOS -------------------------------- */

router.get("/videos", async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/videos/upload", upload.single("video"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No video file uploaded" });
    }
    if (!req.body.title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const video = await Video.create({
      title: req.body.title,
      url: req.file.path,
      publicId: req.file.filename,
    });

    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/videos/link", async (req, res) => {
  try {
    const { title, url } = req.body;
    if (!title || !url) {
      return res.status(400).json({ message: "Title and URL are required" });
    }

    let embedUrl = url;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&\s]+)/);
    if (match) embedUrl = `https://www.youtube.com/embed/${match[1]}`;

    const video = await Video.create({ title, url: embedUrl });
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/videos/:id", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: "Video not found" });

    if (video.publicId) {
      await cloudinary.uploader.destroy(video.publicId, { resource_type: "video" });
    }
    await video.deleteOne();

    res.json({ message: "Video deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;