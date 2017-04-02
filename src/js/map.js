// If you're adding a number of markers, you may want to
// drop them on the map consecutively rather than all at once.
// This example shows how to use setTimeout() to space
// your markers' animation.

/*var berlin = new google.maps.LatLng(52.520816, 13.410186);

var neighborhoods = [
  new google.maps.LatLng(12.924769, 77.686828),
  new google.maps.LatLng(40.793435, -73.414763),
  new google.maps.LatLng(48.235647, 9.001422),
  new google.maps.LatLng(52.517683, 13.394393)
];*/

//var berlin = new google.maps.LatLng(12.924769, 77.686828);
var mgroad = new google.maps.LatLng(12.9727185,77.6197074);

var neighborhoods = [
	[12.972592, 77.618416],
  	[12.972906, 77.617638],
  	[12.973084, 77.616206],
  	[12.973350,77.615096],
  	[12.973580,77.614157]
];


var markers = [];
var iterator = 0;
var map;

function initialize() {
  var mapOptions = {
    zoom: 15,
    center: mgroad,
    mapTypeId:'terrain'
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}

function showUserRoute(){
  $.getJSON("http://lidsmysqldb.cloudapp.net/lids-api/fetch.php", function(result){
                $.each(result, function(i, field){
                    alert(field);
                });
            });
  dropMarkers();
}


function dropMarkers() {
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
