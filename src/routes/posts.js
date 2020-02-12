
const express = require('express')
const post = require('../usecases/post')

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const posts = await post.getAll()
        response.json({
            success: true,
            message: 'all posts',
            data: {
                posts
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

router.post('/', async (request, response) => {
    try {
        const newPost = await post.create(request.body)
        response.json({
            success: true,
            message: 'Post created.',
            data: {
                post: newPost
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

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const postFound = await post.getById(id)
        response.json({
            success: true,
            message: 'Post found',
            data: {
                post: postFound
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

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const postDeleted = await post.deleteById(id)
        response.json({
            success: true,
            messade: 'Post deleted',
            data: {
                post: postDeleted
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

router.patch('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const postInfoToUpdate = request.body
        const updatedPost = await post.updateById(id, postInfoToUpdate)
        response.json({
            success: true,
            message: 'Post updated',
            data: {
                infoUpdated: postInfoToUpdate,
                oldPost: updatedPost
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
