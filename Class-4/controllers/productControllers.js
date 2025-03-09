// Logics of all the routes as function
const Product = require('../models/productModels');

exports.getAllProducts = async (req, res) => {
    const allProducts = await Product.find({});
    res.json(allProducts);
}

exports.getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.status(200).json({productInfo: product, message:"Successful"});
}

exports.cerateProduct = async (req, res) => {
    const product = await Product.create(req.body)
    return res.status(201).json({ message: 'product created' })
}

exports.updateProduct = async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body)
    res.status(201).json({ message: "Product Updated" })
}

exports.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product Deleted" })
}