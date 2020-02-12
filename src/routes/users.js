
const express = require('express')
const user = require('../usecases/user')
const auth = require('../middlewares/auth')

const router = express.Router()

router.post('/', async (request, response) => {
    try {
        const userCreated = await user.create(request.body)
        response.json({
            success: true,
            message: 'user created',
            data: {
                user: userCreated
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
    }
})

router.post('/login', async (request, response) => {
    try {
        const { password, email } = request.body
        if (!password || !email) throw new Error('Unauthorized')
        const jwt = await user.login(email, password)
        response.json({
            succes: true,
            message: 'logged in',
            data: {
                token: jwt
            }
        })
    } catch (error) {
        response.status(401)
        response.json({
            success: false,
            message: 'Unauthorized'
        })
    }
})

router.delete('/:id', auth, async (request, response) => {
    try {
        const { id } = request.params
        const userDeleted = await user.deleteById(id)
        response.json({
            succes: true,
            message: 'User deleted',
            data: {
                user: userDeleted
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
    }
})

router.get('/', async (request, response) => {
    try {
        const allUsers = await user.getall()
        response.json({
            success: true,
            message: 'All users',
            data: {
                allUsers
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
    }
})

module.exports = router