import express from "express";
import {
  getMembers,
  createMember,
  approveMember,
  rejectMember,
} from "../controllers/Membercontroller.js";

// ASSUMPTION: same auth middleware pattern as your other admin routes.
// Adjust the import path / export names if yours differ.


const router = express.Router();

router.get("/", getMembers);
router.post("/", createMember);
router.put("/:id/approve", approveMember);
router.delete("/:id", rejectMember);

export default router;