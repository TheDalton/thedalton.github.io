'use strict';

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 40.233413, lng: -4.390814},
		zoom: 18,
		mapTypeId: 'hybrid'
	});
}
