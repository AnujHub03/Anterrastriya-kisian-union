import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    land: { type: String, default: "" },   // "Small" | "Medium" | "Other" | ""
    state: { type: String, required: true, trim: true },
    city: { type: String, default: "" },
    status: { type: String, enum: ["pending", "approved"], default: "pending" },
  },
  { timestamps: true } // createdAt is used as the join date
);

const Member = mongoose.model("Member", memberSchema);
export default Member;