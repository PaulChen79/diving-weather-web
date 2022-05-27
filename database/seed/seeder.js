require('dotenv').config()
const db = require('../config/mongoose')
const locations = require('./locations.json')
const Weather = require('../models/weather')
const fetch = require('node-fetch')
const queryString = require('query-string')
const moment = require('moment')
const getTimelineURL = 'https://api.tomorrow.io/v4/timelines'
const apikey = process.env.TOMORROW_API_KEY

db.once('open', async () => {
	try {
		const locationName = locations[0].alias
		const locationLon = locations[0].lon
		const locationLat = locations[0].lat
		let locationLatLon = [locationLat, locationLon]
		const fields = [
			'precipitationIntensity',
			'precipitationProbability',
			'humidity',
			'windSpeed',
			'windDirection',
			'temperature',
			'cloudCover',
			'weatherCode'
		]
		const units = 'imperial'
		const timesteps = ['1h']
		const timezone = 'Asia/Taipei'
		let now = moment.utc()
		const startTime = moment.utc(now).add(0, 'minutes').toISOString()
		const endTime = moment.utc(now).add(1, 'days').toISOString()
		const getQueryParameters = queryString.stringify(
			{
				apikey,
				location: locationLatLon,
				fields,
				units,
				timesteps,
				startTime,
				endTime,
				timezone
			},
			{ arrayFormat: 'comma' }
		)
		const result = await fetch(getTimelineURL + '?' + getQueryParameters, {
			method: 'GET',
			compress: true
		})
		const data = await result.json()

		await Weather.create({
			location: locationName,
			date: startTime,
			data: data.data.timelines[0].intervals
		})
		console.log('done')
		process.exit()
	} catch (error) {
		console.log(error)
	}
})
