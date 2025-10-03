import express from "express";

const router = express.Router();

// Health check route
router.get("/health", (req, res) => {
    res.json({ 
        status: "OK", 
        message: "Project Manager API is healthy",
        timestamp: new Date().toISOString()
    });
});

export default router;