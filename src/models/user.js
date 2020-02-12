
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    },
    password: {
        type: String,
        minlength: 1,
        required: true
    },
    name: {
        type: String,
        minlength: 3,
        maxlength: 100
    }
})

module.exports = mongoose.model('Users', userSchema)
