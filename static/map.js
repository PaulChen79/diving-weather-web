const locations = [
	{
		name: '龍洞灣',
		alias: '潛點龍洞灣水域B區北側',
		lon: 121.919,
		lat: 25.118
	},
	{
		name: '潮境公園',
		alias: '漁港八斗子',
		lon: 121.8046,
		lat: 25.1447
	},
	{
		name: '南雅奇岩',
		alias: '漁港南雅',
		lon: 121.8929,
		lat: 25.121
	},
	{
		name: '象鼻岩',
		alias: '漁港深澳',
		lon: 121.82,
		lat: 25.131
	},
	{
		name: '蝙蝠洞',
		alias: '漁港南雅',
		lon: 121.8321,
		lat: 25.1275
	},
	{
		name: '粉鳥林',
		alias: '漁港粉鳥林',
		lon: 121.844,
		lat: 24.496
	},
	{
		name: '豆腐岬',
		alias: '潛點豆腐岬水域',
		lon: 121.873,
		lat: 24.584
	},
	{
		name: '後壁湖',
		alias: '潛點後壁湖航道西側',
		lon: 120.746,
		lat: 21.938
	},
	{
		name: '出水口',
		alias: '潛點第三核能發電廠出水口',
		lon: 120.748,
		lat: 21.931
	},
	{
		name: '墾丁',
		alias: '潛點第三核能發電廠出水口',
		lon: 120.748,
		lat: 21.931
	},
	{
		name: '船帆石',
		alias: '潛點船帆石',
		lon: 120.823,
		lat: 21.931
	},
	{
		name: '萬里桐',
		alias: '潛點萬里桐',
		lon: 120.706,
		lat: 21.995
	},
	{
		name: '紅柴坑',
		alias: '潛點紅柴坑',
		lon: 120.715,
		lat: 21.972
	},
	{
		name: '小灣',
		alias: '潛點小灣',
		lon: 120.804,
		lat: 21.94
	},
	{
		name: '後灣',
		alias: '潛點後灣',
		lon: 120.694,
		lat: 22.041
	},
	{
		name: '柴口風景區',
		alias: '潛點柴口海域',
		lon: 121.4826,
		lat: 22.6773
	},
	{
		name: '砂島',
		alias: '漁港鼻頭',
		lon: 120.8459,
		lat: 21.9111
	},
	{
		name: '睡美人',
		alias: '潛點哈巴狗海域',
		lon: 121.5095,
		lat: 22.6575
	},
	{
		name: '綠島',
		alias: '潛點哈巴狗海域',
		lon: 121.525,
		lat: 22.65
	},
	{
		name: '大白砂',
		alias: '潛點龜灣海域',
		lon: 121.4907,
		lat: 22.6386
	},
	{
		name: '石朗',
		alias: '潛點石朗海域',
		lon: 121.45,
		lat: 22.65
	},
	{
		name: '開元港藍洞',
		alias: '臺東縣蘭嶼鄉',
		lon: 121.5065,
		lat: 22.0563
	},
	{
		name: '蘭嶼',
		alias: '臺東縣蘭嶼鄉',
		lon: 121.5069,
		lat: 22.0581
	},
	{
		name: '雙獅岩',
		alias: '臺東縣蘭嶼鄉',
		lon: 121.5683,
		lat: 22.0857
	},
	{
		name: '玉女岩',
		alias: '臺東縣蘭嶼鄉',
		lon: 121.5179,
		lat: 22.0822
	},
	{
		name: '虎頭坡',
		alias: '臺東縣蘭嶼鄉',
		lon: 121.5208,
		lat: 22.0389
	},
	{
		name: '八代灣',
		alias: '臺東縣蘭嶼鄉',
		lon: 121.548,
		lat: 22.015
	},
	{
		name: '紅頭漁港',
		alias: '臺東縣蘭嶼鄉',
		lon: 121.5544,
		lat: 22.0231
	},
	{
		name: '七號亭',
		alias: '臺東縣蘭嶼鄉',
		lon: 121.5683,
		lat: 22.0747
	},
	{
		name: '母雞岩外礁',
		alias: '臺東縣蘭嶼鄉',
		lon: 121.5586,
		lat: 22.0826
	},
	{
		name: '機場外礁',
		alias: '臺東縣蘭嶼鄉',
		lon: 121.5536,
		lat: 22.0236
	},
	{
		name: '大福漁港',
		alias: '屏東縣琉球鄉',
		lon: 120.3718,
		lat: 22.3308
	},
	{
		name: '小琉球',
		alias: '屏東縣琉球鄉',
		lon: 120.3833,
		lat: 22.3533
	},
	{
		name: '衫福沈船',
		alias: '屏東縣琉球鄉',
		lon: 120.361,
		lat: 22.341
	},
	{
		name: '美人洞',
		alias: '屏東縣琉球鄉',
		lon: 120.3712,
		lat: 22.3527
	},
	{
		name: '花瓶岩',
		alias: '屏東縣琉球鄉',
		lon: 120.3807,
		lat: 22.3559
	},
	{
		name: '龍蝦洞',
		alias: '屏東縣琉球鄉',
		lon: 120.3883,
		lat: 22.3449
	},
	{
		name: '厚石群礁',
		alias: '屏東縣琉球鄉',
		lon: 120.336,
		lat: 22.325
	}
]
const markerInfo = document.querySelector('#info')
const infoMessage = document.querySelector('#info-message')
const infoCloseBtn = document.querySelector('#info-close')
const cardCategories = document.querySelector('#categories')
const weatherTabBtn = document.querySelector('#weather-btn')
const tideTabBtn = document.querySelector('#tide-btn')
const seaTabBtn = document.querySelector('#sea-btn')

let message = ''
let currentPosition

async function initMap() {
	// Map options
	var options = {
		center: { lat: 23.546162, lng: 120.6402133 },
		zoom: 8
	}

	// New map
	const map = new google.maps.Map(document.getElementById('map'), options)

	// Markers of diving sopt
	const infoWindow = new google.maps.InfoWindow({
		content: '',
		disableAutoPan: true
	})

	// Fetching markers and info
	const markers = await Promise.all(
		locations.map(async location => {
			try {
				const marker = await new google.maps.Marker({
					position: { lat: location.lat, lng: location.lon }
				})

				// mouse over marker to show location name
				marker.addListener('mouseover', () => {
					infoWindow.setContent(location.name)
					infoWindow.open(map, marker)
				})

				marker.addListener('mouseout', () => {
					infoWindow.close()
				})

				// Open info tab
				marker.addListener('click', async () => {
					if (markerInfo.classList.contains('hidden')) {
						infoMessage.innerHTML = message
						cardCategories.dataset.location = location.name
						markerInfo.classList.remove('hidden')
						return
					}
					markerInfo.classList.add('hidden')
				})

				return marker
			} catch (error) {
				console.log(error)
			}
		})
	)

	// Add a marker clusterer to manage the markers.
	new markerClusterer.MarkerClusterer({ markers, map })

	weatherTabBtn.addEventListener('click', async event => {
		const location = event.target.parentNode.parentNode.parentNode.dataset.location
		const response = await (await fetch(`/api/v1/weather?location=${location}`)).json()
		message =
			`
		<p>日期： ${response[0].time}</p><br>
		<p>地點： ${response[0].location}</p><br>` +
			'<p>雲量： ' +
			response[0].cloudCover +
			'</p><br>' +
			`<p>氣溫： ${response[0].temperature}度</p><br>
		<p>濕度： ${response[0].humidity}%</p><br>
		<p>雨量${response[0].rain}</p><br>
		<p>${response[0].wind}</p>`
		infoMessage.innerHTML = message
	})

	tideTabBtn.addEventListener('click', async event => {
		const location = event.target.parentNode.parentNode.parentNode.dataset.location
		const response = await (await fetch(`/api/v1/weather?location=${location}`)).json()
		message = `
		<p>日期： ${response[0].time}</p><br>
		<p>地點： ${response[0].location}</p><br>
		<p>潮差： ${response[0].tideDifference}</p><br>
		<p>當日潮汐變化：</p><br>${response[0].tideChanging.substring(7)}</p><br>
		`
		infoMessage.innerHTML = message
	})

	seaTabBtn.addEventListener('click', async event => {
		const location = event.target.parentNode.parentNode.parentNode.dataset.location
		const response = await (await fetch(`/api/v1/weather?location=${location}`)).json()
		message =
			`
		<p>日期： ${response[0].time}</p><br>
		<p>地點： ${response[0].location}</p><br>
		<p>海水溫度： ${response[0].waterTemperature}度</p><br>
		<p>浪高： ${response[0].waveHeight}米</p><br>` +
			'<p>浪向： from ' +
			response[0].waveDirection +
			'</p><br>' +
			'<p>流向： from ' +
			response[0].currentDirection +
			'</p><br>'
		infoMessage.innerHTML = message
	})

	// Set user location to center
	navigator.geolocation.getCurrentPosition(function (position) {
		currentPosition = {
			lat: position.coords.latitude,
			lng: position.coords.longitude
		}
		map.setCenter(currentPosition)
		map.setZoom(11)
	})

	// Close tab by close btn
	infoCloseBtn.addEventListener('click', () => {
		markerInfo.classList.add('hidden')
	})
}
