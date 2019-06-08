// Uncomment for Mongo
const ProductDescription = require('../database/Mongo/models');
// Uncomment for Postgres
// const PostgresProductDescription = require('../database/Postgres/models');

// Uncomment for Mongo
// ----------------------
module.exports = {
  findAll: (req, res) => {
    ProductDescription.find({}) 
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send('Could not find all: ', err));
  },
  deleteAll: (req, res) => {
    ProductDescription.deleteMany({}) 
      .then(() => res.status(201).send('Deleted All'))
      .catch(err => res.status(404).send('Could not delete all: ', err));
  },
  deleteOne: (req, res) => {
    let { id } = req.query;
    ProductDescription.findByIdAndRemove(id)
      .then(() => {
        res.status(202).send('Deleted dress');
      })
      .catch(err => res.status(404).send('Could not delete dress: ', err));
  },
  findOneRandom: (req, res) => {
    ProductDescription.aggregate([{ $sample: { size: 1 } }])
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send('Error'));
  },
  recommendation: (req, res) => {
    ProductDescription.aggregate([{ $sample: { size: 4 } }])
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send('Error'));
  },
  // using dress.ID instead so we can query a dress in the 9-millions
  findOne: (req, res) => {
    const { ID } = req.query;
    console.log(ID);
    ProductDescription.findOne({ ID })
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send('Could not find dress: ', err));
  },
  newDress: (req, res) => {
    let { productName, designer, price, stars, reviews, description, fit, sizes, colors, 
      imageUrlsColor1, imageUrlsColor2 } = req.body;
    let options = { productName, designer, price, stars, reviews, description, fit, sizes, colors,
      imageUrlsColor1, imageUrlsColor2 };
    ProductDescription.create(options)
      .then(() => res.status(201).send('Dress created'))
      .catch(err => status(404).send('Could not create dress: ', err));
  },
  editDress: (req, res) => {
    let { _id, productName, designer, price, stars, reviews, description, fit, sizes, colors, 
      imageUrlsColor1, imageUrlsColor2 } = req.body;
    let options = { _id, productName, designer, price, stars, reviews, description, fit, sizes, colors,
      imageUrlsColor1, imageUrlsColor2 };
    ProductDescription.findByIdAndUpdate(_id, options)
      .then(() => res.status(200).send('Dress updated'))
      .catch(err => status(404).send('Could not update dress: ', err));
  }
}
// -------------------
// Uncomment for Postgres
// -------------------
module.exports = {
  findAll: (req, res) => {
    PostgresProductDescription.findAll({
      where: {}
    }) 
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send('Could not find all: ', err));
  },
  deleteAll: (req, res) => {
    PostgresProductDescription.destroy({
      where: {}
    }) 
      .then(() => res.status(201).send('Deleted All'))
      .catch(err => res.status(404).send('Could not delete all: ', err));
  },
  deleteOne: (req, res) => {
    let { id } = req.query;
    PostgresProductDescription.destroy({
      where: {
        id: id
      }
    })
      .then(() => {
        res.status(202).send('Deleted dress');
      })
      .catch(err => res.status(404).send('Could not delete dress: ', err));
  },
  findOne: (req, res) => {
    const { id } = req.query;
    console.log(id);
    PostgresProductDescription.findOne({
      where: {
        id: id
      }
    })
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send('Could not find dress: ', err));
  },
  newDress: (req, res) => {
    let { productName, designer, price, stars, reviews, description, fit, sizes, colors, 
      imageUrlsColor1, imageUrlsColor2 } = req.body;
    let options = { productName, designer, price, stars, reviews, description, fit, sizes, colors,
      imageUrlsColor1, imageUrlsColor2 };
    PostgresProductDescription.create(options)
      .then(() => res.status(201).send('Dress created'))
      .catch(err => status(404).send('Could not create dress: ', err));
  },
  editDress: (req, res) => {
    let { id, productName, designer, price, stars, reviews, description, fit, sizes, colors, 
      imageUrlsColor1, imageUrlsColor2 } = req.body;
    let options = { id, productName, designer, price, stars, reviews, description, fit, sizes, colors,
      imageUrlsColor1, imageUrlsColor2 };
      PostgresProductDescription.update(options, {
        where: {
          id: id
        }
      })
      .then(() => res.status(200).send('Dress updated'))
      .catch(err => status(404).send('Could not update dress: ', err));
  }
}