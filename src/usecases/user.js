
const User = require('../models/user')
const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')

async function create(userData) {
    const { password, ...restUserData } = userData
    const encryptedPassword = await bcrypt.hash(password)
    return User.create({
        password: encryptedPassword,
        ...restUserData
    })
}

function deleteById(id) {
    return User.findByIdAndDelete(id)
}

async function login(email, password) {
    const userFound = await User.findOne({ email })
    if (!userFound) throw new Error('Unauthorized')
    const isValidPassword = await bcrypt.compare(password, userFound.password)
    if (!isValidPassword) throw new Error('Unauthorized')
    return jwt.sign({ id: userFound._id })
}

function getAll() {
    return User.find()
}

module.exports = {
    create,
    deleteById,
    login
}