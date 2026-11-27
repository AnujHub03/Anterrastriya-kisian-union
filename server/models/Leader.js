
import mongoose from "mongoose";

const leaderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    tier: {
      type: String,
      required: true,
      enum: [
        "InternationalHead",
        "BoardMember",
        "NationalMember",
        "StateMember",
        "InternationalMember",
        "DistrictMember",
        "CityMember",
      ],
    },

    region: {
      type: String,
      default: "",
    },

    designation: {
      type: String,
      required: true,
      trim: true,
    },

    avatar: {
      type: String,
      default: "",
    },

    publicId: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

    joinedDate: {
      type: String,
      default: "",
    },

    responsibilities: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const Leader = mongoose.model("Leader", leaderSchema);

export default Leader;
