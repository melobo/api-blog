
const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true,
        toLowerCase: true
    },
    author: {
        type: String,
        minlength: 2,
        required: true,
        toLowerCase: true
    },
    date: {
        type: Date,
        required: true
    },
    readingTime: {
        type: Number,
        minlength: 1,
        required: true
    },
    image: {
        type: String,
        minlength: 5,
        required: true
    }
})

module.exports = mongoose.model('Posts', postsSchema)
