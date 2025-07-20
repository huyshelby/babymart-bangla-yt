import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import Product from "./models/Product.js";
import sampleProducts from "./data/sampleProducts.js";

// Load env vars
dotenv.config();

// Connect to DB
await connectDB();

// Import data
const importData = async () => {
  try {
    // Clear existing data
    await Product.deleteMany();
    console.log("Previous data deleted".red.inverse);

    // Insert new data
    await Product.insertMany(sampleProducts);

    console.log("Data imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.bold);
    process.exit(1);
  }
};

// Delete data
const destroyData = async () => {
  try {
    // Clear existing data
    await Product.deleteMany();

    console.log("Data destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.bold);
    process.exit(1);
  }
};

// Execute based on command
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
