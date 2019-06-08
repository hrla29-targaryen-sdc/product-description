const Sequelize = require('sequelize');
const sequelize = require('./index.js');

const Product = sequelize.define('product', {
  productName: {
    type: Sequelize.STRING
  },
  sizes: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  description: {
    type: Sequelize.STRING
  },
  color1: {
    type: Sequelize.STRING
  },
  color2: {
    type: Sequelize.STRING
  },
  imageUrlsColor1: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  imageUrlsColor2: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  designer: {
    type: Sequelize.STRING
  },
  fit: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  },
  stars: {
    type: Sequelize.INTEGER
  },
  reviews: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
});

Product.sync();

module.exports = Product;