import Product from "../models/Product.js";

// Format price to VND
const formatPrice = (price) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

// Format product data
const formatProductData = (product) => {
  const formattedProduct = product.toObject();
  formattedProduct.formattedPrice = formatPrice(product.price);
  return formattedProduct;
};

// @desc    Lấy tất cả sản phẩm
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    // Format products
    const formattedProducts = products.map((product) =>
      formatProductData(product)
    );

    res.json({
      success: true,
      count: products.length,
      data: formattedProducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Không thể lấy danh sách sản phẩm",
      error: error.message,
    });
  }
};

// @desc    Lấy một sản phẩm theo ID
// @route   GET /api/products/:id
// @access  Public
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy sản phẩm",
      });
    }

    // Format product
    const formattedProduct = formatProductData(product);

    res.json({
      success: true,
      data: formattedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Không thể lấy thông tin sản phẩm",
      error: error.message,
    });
  }
};

// @desc    Tạo sản phẩm mới
// @route   POST /api/products
// @access  Private/Admin
export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();

    // Format product
    const formattedProduct = formatProductData(product);

    res.status(201).json({
      success: true,
      message: "Tạo sản phẩm thành công",
      data: formattedProduct,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Không thể tạo sản phẩm",
      error: error.message,
    });
  }
};
