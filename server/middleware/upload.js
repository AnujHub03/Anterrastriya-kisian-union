import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

// Automatically uploads whatever file comes in (image or video) straight
// to Cloudinary, into a "gallery" folder, and picks the right resource_type.
const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const isVideo = file.mimetype.startsWith("video");
    return {
      folder: "gallery",
      resource_type: isVideo ? "video" : "image",
    };
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB, generous for video
});

export default upload;