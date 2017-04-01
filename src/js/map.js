var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(12.9727185,77.6197074),
    mapTypeId: 'terrain'
  });

  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}
