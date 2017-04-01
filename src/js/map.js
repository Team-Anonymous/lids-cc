var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: new google.maps.LatLng(12.9727185,77.6197074),
          mapTypeId: 'terrain'
        });
<<<<<<< HEAD


        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);

        // Create a <script> tag and set the USGS URL as the source.
        var script = document.createElement('script');
        // This example uses a local copy of the GeoJSON stored at
        // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
        script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
=======
                     // Create a <script> tag and set the USGS URL as the source.
    /*    var script = document.createElement('script');
        // (In this example we use a locally stored copy instead.)
        // script.src = 'http://earthquake.usgs.gov/earthquakes/feed/geojsonp/2.5/week';
        script.src = "http://lidsmysqldb.cloudapp.net/sih2017/lids-api/fetch.php";
           alert("hello");
            alert(results);
>>>>>>> fd46ddef79ee5d874a398661737cb348b573a0bd
        document.getElementsByTagName('head')[0].appendChild(script);
      }
     */
      alert("hello1");
       $.getJSON("http://lidsmysqldb.cloudapp.net/sih2017/lids-api/fetch.php", function(results) {
      alert(results);
      alert("hello2");
      });
      }


      // Loop through the results array and place a marker for each
      // set of coordinates.
      window.eqfeed_callback = function(results) {
        for (var i = 0; i < results.features.length; i++) {
          var latLng = new google.maps.LatLng(coords[1],coords[0]);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map
          });
        }
      }
