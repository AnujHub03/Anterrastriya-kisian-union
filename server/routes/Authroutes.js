import express from "express";
import jwt from "jsonwebtoken";
import { protect } from "../middleware/Authmiddleware.js";

const router = express.Router();

// POST /api/auth/login
router.post("/login", (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ message: "Please provide email and password" });
    }

    const { ADMIN_EMAIL, ADMIN_PASSWORD, JWT_SECRET } = process.env;

    if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !JWT_SECRET) {
      console.error("Missing env vars:", {
        ADMIN_EMAIL: !!ADMIN_EMAIL,
        ADMIN_PASSWORD: !!ADMIN_PASSWORD,
        JWT_SECRET: !!JWT_SECRET,
      });
      return res.status(500).json({ message: "Server is not configured (check .env)" });
    }

    const ok =
      email.trim().toLowerCase() === ADMIN_EMAIL.trim().toLowerCase() &&
      password === ADMIN_PASSWORD;

    if (!ok) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ role: "admin", email: ADMIN_EMAIL }, JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({ token, admin: { email: ADMIN_EMAIL, role: "admin" } });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: err.message });
  }
});

// GET /api/auth/me
router.get("/me", protect, (req, res) => {
  res.json({ email: req.admin.email, role: req.admin.role });
});

export default router;