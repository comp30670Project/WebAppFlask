var map;
function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
 center: {lat: 53.3498, lng: -6.266155},
 zoom: 8
 }); 
 showStationMarkers();
 }

function showStationMarkers() {
    $.getJSON("http://127.0.0.1:5000/dbinfo", function(res) {
      console.log(res); 
    // var stations = data.stations;
    // console.log('stations', stations);
      // draw markers
  //   })
  // .fail(function() {
  // console.log( "error" );
  for (var i = 0; i < res.length; i++) {
    var item = res[i];

    var markerLatLng = new google.maps.LatLng(item.lat, item.lon);
    var marker = new google.maps.Marker({
      position: markerLatLng
    });
    marker.item = item;
    marker.setMap(map);
    google.maps.event.addListener(marker, "click", function(mark){

    });
    
  }
          }


