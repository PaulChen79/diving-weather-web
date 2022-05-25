const express = require('express')
const router = express.Router()

const Weather = require('../database/models/weather')

router.get('/', (req, res) => {
	res.render('index', { APIKey: process.env.GOOGLE_MAP_API_KEY })
})

router.get('/api/v1/weather', async (req, res) => {
	try {
		const location = req.query.location
		const weather = await Weather.find({ location }).lean()
		res.json(weather)
	} catch (error) {
		console.log(error)
	}
})

module.exports = router
