const express = require('express')
const router = express.Router()
const {
    getAllProperties,
    getOneProperty,
    createOneProperty,
    editOneProperty,
    deleteOneProperty
} = require('../controllers/propertyController')

// Get all properties
router.get('/property', getAllProperties)
// Get one property
router.get('/property/:id', getOneProperty)
// Creating one property
router.post('/property', createOneProperty)
// Edit one property
router.put('/property/:id', editOneProperty)
// Deleting one property
router.delete('/property/:id',deleteOneProperty)

module.exports = router