import mongoose from "mongoose";

// One row per resolution card shown on the Sankalp page (25 of them).
const resolutionSchema = new mongoose.Schema(
  {
    num: { type: String, required: true },   // "01".."25"
    icon: { type: String, required: true },  // emoji shown on the card
    title: { type: String, required: true },
    desc: { type: String, required: true },
    color: { type: String, required: true }, // must match a key in SankalpPatra's colorMap
  },
  { _id: false }
);

// Single document holding just the resolutions array. Nothing else on the
// Sankalp page is admin-managed.
const sankalpSchema = new mongoose.Schema(
  {
    resolutions: {
      type: [resolutionSchema],
      default: [],
    },
  },
  { timestamps: true }
);

const Sankalp = mongoose.model("Sankalp", sankalpSchema);
export default Sankalp;