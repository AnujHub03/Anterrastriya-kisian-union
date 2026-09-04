import mongoose from "mongoose";

const photoSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true, // Cloudinary secure_url
    },
    publicId: {
      type: String, // Cloudinary public_id, needed to delete the file later
      required: true,
    },
    caption: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);

const Photo = mongoose.model("Photo", photoSchema);

export default Photo;