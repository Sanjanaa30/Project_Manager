import { z } from "zod";
import { signInSchema, signUpSchema } from "@/lib/schema";

// Form data types derived from schemas
export type SignInFormData = z.infer<typeof signInSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;

// API response types
export interface User {
    id: string;
    email: string;
    name: string;
    profilePicture?: string;
    isEmailVerified: boolean;
    lastLogin?: Date;
    is2FAEnabled: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface AuthResponse {
    user: User;
    token: string;
    message: string;
}

export interface ApiError {
    message: string;
    errors?: Record<string, string[]>;
}