import express from "express";
import { validateRequest } from "zod-express-middleware";
import { registerUser, loginUser, verifyEmail } from "../controllers/auth_controller.js";
import { registerSchema, loginSchema } from "../libs/validate_schema.js";

const router = express.Router();

// Authentication routes
router.post("/register",
    validateRequest({
        body: registerSchema,
    }),
    registerUser
);

router.post("/login",
    validateRequest({
        body: loginSchema,
    }),
    loginUser
);

// Email verification route
router.get("/verify-email", verifyEmail);

export default router;
