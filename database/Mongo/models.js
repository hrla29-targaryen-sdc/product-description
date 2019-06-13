const mongoose = require('mongoose');
const db = require('./index');

// Product Description Schema
const productDescriptionSchema = new mongoose.Schema({
  productName: String,
  designer: String,
  price: Number,
  stars: Number,
  reviews: Number,
  description: String,
  fit: String,
  sizes: Array,
  color1: String,
  color2: String,
  imageUrlsColor1: Array,
  imageUrlsColor2: Array,
  ID: Number
}, { collection: 'mongoData' });

// Connecting the Product Descriptions Schema to the database
const ProductDescription = mongoose.model('ProductDescriptions', productDescriptionSchema);

module.exports = ProductDescription;