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
var india = new google.maps.LatLng(7.873054, 80.771797);

var neighborhoods = [
	[16.4396619, 80.6197623],
  	[16.4496619, 80.6597623],
  	[16.2496619, 81.001422],
  	[16.6496619, 81.863136],
  	[16.8496619, 81.922805]  
];


var markers = [];
var iterator = 0;

var map;

function initialize() {
  var mapOptions = {
    zoom: 5,
    center: india
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);
$.getJSON("http://lidsmysqldb.cloudapp.net/sih2017/lids-api/fetch.php", function(result){
	alert(result);
        $.each(result, function(i, field){
            alert(field);
        });
    });
drop();
}

function drop() {
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
