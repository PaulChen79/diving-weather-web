function initMap() {
	var options = {
		center: { lat: 23.546162, lng: 120.6402133 },
		zoom: 8
	}

	map = new google.maps.Map(document.getElementById('map'), options)
}
