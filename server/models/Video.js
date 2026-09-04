import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true, // either a Cloudinary video URL or a YouTube embed URL
    },
    publicId: {
      type: String, // only set when the video was uploaded to Cloudinary directly
      default: null,
    },
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);

export default Video;