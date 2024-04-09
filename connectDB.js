const mongoose = require('mongoose')
//const MongoDB_URI = "mongodb+srv://gperez314:MongoDB123@finalproject.vcpjhfl.mongodb.net/data?retryWrites=true&w=majority&appName=FinalProject"
const MongoDB_URI = "mongodb+srv://rogine:E6DieXSYUpEAJEKa@gin.a6a0qkg.mongodb.net/sharedspace?retryWrites=true&w=majority&appName=Gin"
// Function to connect to MongoDB Atlas database
async function connectToMongoDB() {
    try {
        await mongoose.connect(MongoDB_URI);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err)
    }
}

// Export function
module.exports = connectToMongoDB