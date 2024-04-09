const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const bcrypt = require('bcrypt')

const accessSecret = crypto.randomBytes(64).toString('hex')
console.log(accessSecret)

const userData = require('../models/user')

// Backend API to add new user to database
const signup = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const newUser = new userData({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: hashedPassword,
        role: req.body.role
    })
    try {
        newUser.save()
        res.status(201).send(newUser)
    } catch (err) {
        res.status(500).send("fail")
    }
}

// Backend API to get all users
const getusers = async (req, res) => {
    try {
        const users = await userData.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

// Backend API to log-in a user
const login = async (req, res) => {
    const user = await userData.find({
        email: req.body.email
    })
    try {
        if (await bcrypt.compare(req.body.password, user[0].password)) {
            const userJWT = {
                name: user[0].name,
                email: user[0].email,
                role: user[0].role
            }
            const accessToken = jwt.sign(userJWT, accessSecret)
            res.send({
                accessToken: accessToken
            })
        } else {
            res.send('Not Allowed')
        }
    } catch {
        res.status(500).send()
    }
}

// Backend API to authenticate token
const auth = async (req, res) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, accessSecret, (err, user) => {
        if (err) return res.sendStatus(403)
        console.log(user)
        req.user = user
        res.json(req.user)
    })
}

// Export API functions
module.exports = {
    signup,
    getusers,
    login,
    auth
}