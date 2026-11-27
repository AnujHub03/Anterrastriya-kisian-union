
import express from "express";

import {
  getLeaders,
  getLeaderById,
  createLeader,
  updateLeader,
  deleteLeader,
} from "../controllers/Leadercontroller.js";

import leaderUpload from "../middleware/leaderUpload.js";
import { protect } from "../middleware/Authmiddleware.js";

const router = express.Router();

// Public routes
router.get("/", getLeaders);
router.get("/:id", getLeaderById);

// Protected write routes
router.post("/",  leaderUpload.single("avatar"), createLeader);
router.put("/:id", leaderUpload.single("avatar"), updateLeader);
router.delete("/:id", deleteLeader);

export default router;
