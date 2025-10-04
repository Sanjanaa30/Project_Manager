import express from "express";
import { validateRequest } from "zod-express-middleware";
import { registerUser, loginUser } from "../controllers/auth_controller.js";
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

export default router;
