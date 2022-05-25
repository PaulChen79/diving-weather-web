require('dotenv').config()

function genResult(tideData, weatherData, waveData, name, today) {
	const tideElemant = tideData.data.records.location[0].validTime[0].weatherElement[2]
	// Factoryig result date
	const result = {
		location: name,
		time: `${today.substring(0, 10)}`,
		tideDifference: tideData.data.records.location[0].validTime[0].weatherElement[1].elementValue,
		tideChanging: `當日潮汐變化：\n${
			tideElemant.time[0] ? tideElemant.time[0].dataTime.substring(11, 16) : '暫無資料'
		} - ${tideElemant.time[0] ? tideElemant.time[0].parameter[0].parameterValue : ''}\n${
			tideElemant.time[1] ? tideElemant.time[1].dataTime.substring(11, 16) : '暫無資料'
		} - ${tideElemant.time[1] ? tideElemant.time[1].parameter[0].parameterValue : ''}\n${
			tideElemant.time[2] ? tideElemant.time[2].dataTime.substring(11, 16) : '暫無資料'
		} - ${tideElemant.time[2] ? tideElemant.time[2].parameter[0].parameterValue : ''}\n${
			tideElemant.time[3] ? tideElemant.time[3].dataTime.substring(11, 16) : '暫無資料'
		} - ${tideElemant.time[3] ? tideElemant.time[3].parameter[0].parameterValue : ''}`,
		temperature: Math.round(weatherData.data.main.temp - 273.15),
		humidity: weatherData.data.main.humidity,
		rain: `每小時： ${weatherData.data.rain ? weatherData.data.rain['1h'] : 0}mm`,
		wind:
			`風速： ${weatherData.data.wind.speed}miles/小時\n` +
			'風向： from ' +
			changeDeg(weatherData.data.wind.deg),
		waveHeight: waveData.data.hours[0].waveHeight.sg,
		waveDirection: changeDeg(waveData.data.hours[0].waveDirection.sg),
		waterTemperature: waveData.data.hours[0].waterTemperature.sg,
		currentSpeed: waveData.data.hours[0].currentSpeed.sg,
		currentDirection: changeDeg(waveData.data.hours[0].currentDirection.sg),
		cloudCover: genCloudCover(waveData.data.hours[0].cloudCover.sg)
	}
	return result
}
function changeDeg(deg) {
	let windDirection = ''
	if ((deg > 337.5 && deg <= 359) || deg === 0) {
		windDirection = '北 ↓'
	} else if (deg > 0 && deg <= 22.5) {
		windDirection = '北北東 ↙'
	} else if (deg > 22.5 && deg <= 45) {
		windDirection = '東北 ↙'
	} else if (deg > 45 && deg <= 67.5) {
		windDirection = '東北東 ↙'
	} else if (deg > 67.5 && deg <= 90) {
		windDirection = '東 ←'
	} else if (deg > 90 && deg <= 112.5) {
		windDirection = '東南東 ↖'
	} else if (deg > 112.5 && deg <= 135) {
		windDirection = '東南 ↖'
	} else if (deg > 135 && deg <= 157.5) {
		windDirection = '南南東 ↖'
	} else if (deg > 157.5 && deg <= 180) {
		windDirection = '南 ↑'
	} else if (deg > 180 && deg <= 202.5) {
		windDirection = '南南西 ↗'
	} else if (deg > 202.5 && deg <= 225) {
		windDirection = '西南 ↗'
	} else if (deg > 225 && deg <= 247.5) {
		windDirection = '西南西 ↗'
	} else if (deg > 247.5 && deg <= 270) {
		windDirection = '西 →'
	} else if (deg > 270 && deg <= 292.5) {
		windDirection = '西北西 ↘'
	} else if (deg > 292.5 && deg <= 315) {
		windDirection = '西北 ↘'
	} else if (deg > 315 && deg <= 337.5) {
		windDirection = '北北西 ↘'
	}
	return windDirection
}

function genCloudCover(percent) {
	let result = ''
	if (percent <= 25) {
		result = '晴天'
	} else if (percent > 25 && percent <= 62.5) {
		result = '疏雲'
	} else {
		result = '多雲'
	}
	return result
}

module.exports = { genResult }
