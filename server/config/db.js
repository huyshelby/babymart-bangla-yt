import mongoose from "mongoose";
import "dotenv/config";
// Hàm kết nối đến MongoDB
const connectDB = async () => {
  try {
    // MongoDB URI - sử dụng biến môi trường MONGO_URI hoặc sử dụng chuỗi kết nối MongoDB Atlas
    const mongoURI =
      process.env.MONGO_URI ||
      "mongodb+srv://boneweb:bGYcc1xwxDvXp67p@cluster0.nnoozut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    const conn = await mongoose.connect(mongoURI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1); // Thoát với mã lỗi
  }
};

export default connectDB;
