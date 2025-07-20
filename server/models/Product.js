import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Tên sản phẩm là bắt buộc"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Giá sản phẩm là bắt buộc"],
    min: 0,
  },
  description: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: [true, "Danh mục sản phẩm là bắt buộc"],
  },
  image: {
    type: String,
    required: false,
    default: "default-product.jpg",
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
