const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubSchema = new Schema({
    email : {
        type : String,
        required : true,
    },
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true,
    },
    fiction: Boolean,
    nonFiction: Boolean,
    tvShows: Boolean,
    novels: Boolean,
    movies: Boolean,
    books: Boolean,
    halloween: Boolean,
    gothic: Boolean,
    religious: Boolean,
    daily: Boolean,
    weekly: Boolean,
    monthly: Boolean,
})

const Sub = mongoose.model('Sub', SubSchema)

module.exports = Sub;