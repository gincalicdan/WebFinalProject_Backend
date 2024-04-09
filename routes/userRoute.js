const express = require('express')
const router = express.Router()
const {
    signup,
    getusers,
    login,
    auth
} = require('../controllers/userController')

// Sign-up new user
router.post('/signup', signup)

// Check existing user
router.get('/getusers', getusers)

// Log-in user
router.post('/login', login)

// Validate token
router.get('/', auth)

module.exports = router