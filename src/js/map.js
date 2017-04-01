var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: new google.maps.LatLng(2.8,-187.3),
          mapTypeId: 'terrain'
        });
                     // Create a <script> tag and set the USGS URL as the source.
    /*    var script = document.createElement('script');
        // (In this example we use a locally stored copy instead.)
        // script.src = 'http://earthquake.usgs.gov/earthquakes/feed/geojsonp/2.5/week';
        script.src = "http://lidsmysqldb.cloudapp.net/sih2017/lids-api/fetch.php";
           alert("hello");
            alert(results);
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
