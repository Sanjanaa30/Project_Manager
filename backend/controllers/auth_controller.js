import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Verification from "../models/verification.js";
import { sendEmail } from "../libs/send-email.js";
import crypto from "crypto";


const registerUser = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const existingUser = await User.findOne({ email })

        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            email, 
            password: hashedPassword, 
            name,
        });

        // Generate verification token
        const verificationToken = crypto.randomBytes(32).toString('hex');

        // Create verification record
        await Verification.create({
            userId: newUser._id,
            token: verificationToken,
            expiresAt: new Date(Date.now() + 24*60*60*1000), // 24 hours from now
        });

        // Send verification email
        const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}`;
        const emailBody = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #4F46E5;">Welcome to TaskHub!</h2>
                <p>Hi ${name},</p>
                <p>Thank you for signing up! Please verify your email address by clicking the button below:</p>
                <div style="text-align: center; margin: 30px 0;">
                    <a href="${verificationLink}" style="background-color: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Verify Email</a>
                </div>
                <p>Or copy and paste this link in your browser:</p>
                <p style="word-break: break-all; color: #6B7280;">${verificationLink}</p>
                <p>This link will expire in 24 hours.</p>
                <p>If you didn't create an account, please ignore this email.</p>
                <p>Best regards,<br>TaskHub Team</p>
            </div>
        `;
        const emailSubject = "Verify your email for TaskHub";

        const isEmailSent = await sendEmail(email, emailSubject, emailBody);
        if (!isEmailSent) {
            return res.status(500).json({ message: "Failed to send verification email" });
        }

        res.status(201).json({
            message: "Account created successfully! Please check your email to verify your account.",
            user: {
                id: newUser._id,
                email: newUser.email,
                name: newUser.name,
                isEmailVerified: newUser.isEmailVerified
            }
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    };
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email (include password field)
        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Compare password
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                isEmailVerified: user.isEmailVerified
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const verifyEmail = async (req, res) => {
    try {
        const { token } = req.query;

        if (!token) {
            return res.status(400).json({ message: "Verification token is required" });
        }

        // Find verification record
        const verification = await Verification.findOne({ token });

        if (!verification) {
            return res.status(400).json({ message: "Invalid verification token" });
        }

        // Check if token has expired
        if (verification.expiresAt < new Date()) {
            await Verification.deleteOne({ _id: verification._id });
            return res.status(400).json({ message: "Verification token has expired" });
        }

        // Update user email verification status
        const user = await User.findByIdAndUpdate(
            verification.userId,
            { isEmailVerified: true },
            { new: true }
        );

        // Delete verification record
        await Verification.deleteOne({ _id: verification._id });

        // Generate JWT token for the verified user
        const jwtToken = jwt.sign(
            {
                userId: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(200).json({
            message: "Email verified successfully!",
            token: jwtToken,
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                isEmailVerified: user.isEmailVerified
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export { registerUser, loginUser, verifyEmail };