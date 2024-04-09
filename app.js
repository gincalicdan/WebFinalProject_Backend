// Import necessary parameters from modules
const express = require('express')
const app = express()
const propertyRoutes = require('./routes/propertyRoute')
const userRoutes = require('./routes/userRoute')
const connectToMongoDB = require('./connectDB')

// convert form data to javascript object and put into request body
app.use(express.urlencoded({extended: false}))
// convert json to javascript object and put into request body
app.use(express.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})

// Connect to MongoDB Atlas database
connectToMongoDB()

// Use router
app.use(userRoutes)
app.use(propertyRoutes)

// Start server
app.listen(5500, ()=>{
    console.log('server is running........')
})