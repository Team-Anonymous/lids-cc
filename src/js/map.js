var india = new google.maps.LatLng(7.873054, 80.771797);

var neighborhoods = [];


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
$.getJSON("http://lidsmysqldb.cloudapp.net/sih2017/lids-api/fetch.php?tripid=1", function(result){
	alert(result);
        $.each(result, function(i, field){
		var loc=[];
		loc.push(field['latitude7E']);
		loc.push(field['longitude7E']);
		alert(loc);
            neighborhoods.push(loc);
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
