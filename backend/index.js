import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";

import routes from "./routes/index.js";



dotenv.config();

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the TaskHub API - Backend Running!" });
});

//http://localhost:5000/api-v1/
app.use("/api-v1", routes);

// error handling middleware
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});

//not found middleware
app.use((req, res) => {
    res.status(404).json({ message: "Message not found" });
});

// Connect to Morgan
app.use(morgan("dev"));

// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});