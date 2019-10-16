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
    }
})

const Sub = mongoose.model('Sub', SubSchema)

module.exports = Sub;