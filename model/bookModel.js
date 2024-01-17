const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookModelSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    isbn: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('books', BookModelSchema)