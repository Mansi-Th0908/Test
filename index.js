import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import appRouter from './routes/app.route.js';
import fileUpload from "express-fileupload";
import cors from 'cors';
import bodyParser from "body-parser";

dotenv.config();

const port = 3000;
const app = express();

const url = "mongodb+srv://Mansi://///@cluster0.kgabd.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json()); // ✅ Fixed
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/vscode/Project/public/temp/'
}));

// Optional root route
app.get("/", (req, res) => {
    res.send("Welcome to the homepage!");
});

app.use("/app", appRouter);

const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
    }
};

connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
