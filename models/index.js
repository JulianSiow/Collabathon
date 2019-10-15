const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/vampires'

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('MongoDB successfully connected...'))
  .catch((error) => console.log(error));

module.exports = {
    Subs: require('./Sub.js'),
  };
