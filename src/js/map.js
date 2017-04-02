var mgroad = new google.maps.LatLng(12.9727185,77.6197074);

var markers = [];
var iterator = 0;
var map;
var neighborhoods = [];

function initialize() {
  var mapOptions = {
    zoom: 17,
    center: mgroad,
    mapTypeId:'terrain'
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
	var initialNeighborhoods = [
		  [12.972592, 77.618416],
	  	[12.972906, 77.617638],
	  	[12.973084, 77.616206],
	  	[12.973350,77.615096],
	  	[12.973580,77.614157]
	];
	//dropMarkers(initialNeighborhoods);
}

function showUserRoute(tripID){
	var routeNeighborhoods = [];
	$.getJSON("http://lidsmysqldb.cloudapp.net/sih2017/lids-api/fetchTripInfo.php?tripid=5", function(result){
	    $.each(result, function(i, field){
					var loc=[];
					loc.push(field['latitude7E']);
					loc.push(field['longitude7E']);
			    routeNeighborhoods.push(loc);
			    });
			dropMarkers(routeNeighborhoods);
	    });
}

function dropMarkers(userNeighborhoods) {
	neighborhoods = userNeighborhoods;
  for (var i = 0; i < neighborhoods.length; i++) {
    setTimeout(function() {
      addMarker();
    }, i * 20);
  }
}

function addMarker() {
  lati=neighborhoods[iterator][0];
  longi=neighborhoods[iterator][1];
  markers.push(new google.maps.Marker({
    position: new google.maps.LatLng(lati,longi),
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP
  }));
  iterator++;
}

google.maps.event.addDomListener(window, 'load', initialize);
