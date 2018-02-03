var travelTimeId = "updateTime";
var updateTimeElem = document.getElementById(travelTimeId);
var format = dateFns.format

function initMap() {
  var currentDate = new Date();
  var directionsService = new google.maps.DirectionsService();
  var request = {
    origin: "22.248873,114.161922",
    destination: "22.276049,114.180187",
    travelMode: "DRIVING",
    drivingOptions: {
      departureTime: currentDate,
      trafficModel: "bestguess"
    }
  }
  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      var travelTimeSeconds = result.routes[0].legs[0].duration_in_traffic.value;
      var minutes = Math.floor(travelTimeSeconds / 60);
      updateTimeElem.innerText = "(" + format(currentDate, "HH:mm") + " 更新) - " + minutes + "分鐘"
    } else {
      console.error(status)
    }
  });
}
