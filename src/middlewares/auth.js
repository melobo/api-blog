
const jwt = require('../lib/jwt')

function auth(request, response, next) {
    try {
        const { authorization: token } = request.headers
        const decodedToken = jwt.verify(token)
        if (!decodedToken) throw new Error('Invalid Token')
        next()
    } catch (error) {
        response.status(401)
        response.json({
            success: false,
            message: 'Unauthorized'
        })
    }
}

module.exports = auth