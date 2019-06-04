const ProductDescription = require('../database/models');

module.exports = {
  findAll: (req, res) => {
    ProductDescription.find({}) 
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send('Error'));
  },
  deleteAll: (req, res) => {
    ProductDescription.deleteMany({}) 
      .then(() => res.status(201).send('Deleted All'))
      .catch(err => res.status(404).send('Error'));
  },
  deleteOne: (req, res) => {
    let { id } = req.query;
    ProductDescription.findByIdAndRemove(id)
      .then(() => {
        res.status(202).send('Deleted dress');
      })
      .catch(err => res.status(404).send('Could not delete dress'));
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
  findOneById: (req, res) => {
    const { _id } = req.params;
    ProductDescription.find({ _id })
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send('Error'));
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