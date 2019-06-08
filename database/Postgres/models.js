const sequelize = require('./index.js');

const Product = sequelize.define('product', {
  productName: {
    type: Sequelize.STRING
  },
  designer: {
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
  },
  description: {
    type: Sequelize.STRING
  },
  fit: {
    type: Sequelize.STRING
  },
  sizes: {
    type: [Sequelize.STRING]
  },
  color1: {
    type: Sequelize.STRING
  },
  color2: {
    type: Sequelize.STRING
  },
  imageUrlsColor1: {
    type: [Sequelize.STRING]
  },
  imageUrlsColor2: {
    type: [Sequelize.STRING]
  }
});

Product.sync({ force: true });

module.exports = Product;