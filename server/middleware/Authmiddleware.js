import jwt from "jsonwebtoken";
import "dotenv/config";

export const protect = (req, res, next) => {
  const token = req.headers.authorization || "";
  console.log('token',token)
  
  if (!token) return res.status(401).json({ message: "Not authorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") return res.status(403).json({ message: "Forbidden" });
    req.admin = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
  
};