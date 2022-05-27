const mongoose = require('mongoose')
const Schema = mongoose.Schema
const weatherSchema = new Schema({
	location: { type: String },
	date: { type: Date },
	data: { type: Object }
})

module.exports = mongoose.model('Weather', weatherSchema)
