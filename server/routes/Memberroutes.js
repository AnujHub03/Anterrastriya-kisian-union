import express from "express";
import {
  getMembers,
  createMember,
  approveMember,
  rejectMember,
  getMemberByPhone
} from "../controllers/Membercontroller.js";

import { protect } from "../middleware/Authmiddleware.js";
// ASSUMPTION: same auth middleware pattern as your other admin routes.
// Adjust the import path / export names if yours differ.


const router = express.Router();

router.get("/",getMembers);
router.get("/:phone",getMemberByPhone)
router.post("/", createMember);
router.put("/:id/approve", protect,approveMember);

router.delete("/:id", protect,rejectMember);

export default router;