const propertyData = require('../models/property')

// Backend API to get all properties and corresponding details
const getAllProperties = async (req, res) => {
    try {
        const properties = await propertyData.find()
        res.json(properties)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

// Backend API to get property details based on id
const getOneProperty = async (req, res) => {
    try {
        let property = await propertyData.findById(req.params.id)
        if (property == null) {
            res.status(404).json({
                message: 'Cannot find property'
            })
        } else {
            res.json(property)
        }
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

// Backend API to add new property and return the updated list of properties
const createOneProperty = async (req, res) => {
    const property = new propertyData({
        address: req.body.address,
        neighborhood: req.body.neighborhood,
        squareFeet: req.body.squareFeet,
        parking: req.body.parking,
        publicTransport: req.body.publicTransport,
        workspace: []
    })
    try {
        property.save()
        const properties = await propertyData.find()
        res.json(properties)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

// Backend API to edit a property and return the updated list of properties
const editOneProperty = async (req, res) => {
    try {
        await propertyData.findByIdAndUpdate(req.params.id, req.body)
        const properties = await propertyData.find()
        res.json(properties)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

// Backend API to delete a property and return the updated list of properties
const deleteOneProperty = async (req, res) => {
    try {
        let property = await propertyData.findByIdAndDelete(req.params.id)
        if (property == null) {
            res.status(404).json({
                message: 'Cannot find property'
            })
        } else {
            const properties = await propertyData.find()
            res.json(properties)
        }
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

// Export API functions
module.exports = {
    getAllProperties,
    getOneProperty,
    createOneProperty,
    editOneProperty,
    deleteOneProperty
}