import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

// Load env Server
dotenv.config();

// Khởi tạo Express app
const app = express();
const PORT = process.env.PORT || 8000;

// CORS middleware
app.use(cors());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Kết nối MongoDB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Hello from Baby Mart Server");
});

// API route để kiểm tra kết nối MongoDB
app.get("/api/check-db", (req, res) => {
  const dbStatus = {
    isConnected: mongoose.connection.readyState === 1,
    dbName: mongoose.connection.db?.databaseName || "Not connected",
    host: mongoose.connection.host || "Not connected",
  };

  res.json({
    success: dbStatus.isConnected,
    message: dbStatus.isConnected
      ? `Connected to MongoDB: ${dbStatus.dbName} at ${dbStatus.host}`
      : "Not connected to MongoDB",
    dbStatus,
  });
});

// Mount API routes
app.use("/api/products", productRoutes);

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  console.log(
    `Client URL: ${process.env.CLIENT_URL || "http://localhost:3000"}`
  );
  console.log(`Admin URL: ${process.env.ADMIN_URL || "http://localhost:5173"}`);
  console.log(`API docs available at: http://localhost:${PORT}/api/docs`);
});
