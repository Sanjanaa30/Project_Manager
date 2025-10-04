import User from "../models/user.js";
import bcrypt from "bcrypt";


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
            email, password: hashedPassword, name,
        });

        //TODO: Send verification email with OTP
        res.status(201).json({
            message: "Verification code sent to email",
        });
    }
    catch(err) {
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
        
        // TODO: Generate JWT token
        // For now, just return success message
        res.status(200).json({
            message: "Login successful",
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

    export { registerUser, loginUser };