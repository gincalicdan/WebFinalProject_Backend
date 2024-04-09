const mongoose = require('mongoose')

// Create schema for workspaces
const workspaceSchema = new mongoose.Schema({
   seatingCapacity: String,
   smokingPolicy: String,
   availabilityDate: String,
   leaseTerm: String,
   price: String
})

// Create schema for properties with a field for array of workspaces
const propertySchema = new mongoose.Schema({
   address: String,
   neighborhood: String,
   squareFeet: String,
   parking: String,
   publicTransport: String,
   workspace: [workspaceSchema]
},{collection:'properties'})

// Export schema
module.exports = mongoose.model('property', propertySchema)