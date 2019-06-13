const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('useFindAndModify', false);

// FOR FEC
// let DB_URL = (process.env.NODE_ENV === 'development') ? 'mongodb://localhost/productDescription' : `mongodb+srv://matthewmata1030:${process.env.DB_PW}@cluster0-esl5a.mongodb.net/test?retryWrites=true&w=majority`

// BEFORE AWS
// let DB_URL = 'mongodb://localhost/productDescription';

//AFTER AWS
let DB_URL = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@18.220.135.58/productDescription`;

// Connecting our local storage db to our application with the db name productDescription
const db = mongoose.connect(DB_URL, {useNewUrlParser: true});

mongoose.connection.once('open', () => {
  console.log('Connected to database!');
});

module.exports = db;