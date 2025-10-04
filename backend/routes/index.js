import express from "express";
import authRoutes from "./auth.js";

const router = express.Router();

// Health check route
router.get("/health", (req, res) => {
    res.json({ 
        status: "OK", 
        message: "Project Manager API is healthy",
        timestamp: new Date().toISOString()
    });
});

router.use("/auth", authRoutes);


export default router;

