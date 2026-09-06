import express from "express";
import {
  createPayment,
  getPayments,
  approvePayment,
  rejectPayment,
} from "../controllers/Paymentcontroller.js";

// ASSUMPTION: same auth middleware pattern as your other admin routes.


const router = express.Router();

router.post("/", createPayment);
router.get("/", getPayments);
router.put("/:id/approve", approvePayment);
router.put("/:id/reject", rejectPayment);

export default router;