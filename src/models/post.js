
const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        minlength: 2,
        maxlength: 20,
        required: true,
        toLowerCase: true,
        trim: true
    },
    dateCreated: {
        type: Date,
        default: new Date()
    },
    readingTime: {
        type: Number,
        min: 1,
        required: true
    },
    imageUrl: {
        type: String,
        minlength: 5,
        maxlength: 500,
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 128
    }
})

module.exports = mongoose.model('Posts', postsSchema)
