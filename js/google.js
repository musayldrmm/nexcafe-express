 start=myArray[baslangic];
 end=myArray_2[son];


function initMap() {
  start=new google.maps.LatLng(start)
 end=new google.maps.LatLng(end)
      myOptions = {
        zoom: 7,
        center: start,
      },
      map = new google.maps.Map(document.getElementById("map"), myOptions),
      // Instantiate a directions service.
      directionsService = new google.maps.DirectionsService(),
      directionsDisplay = new google.maps.DirectionsRenderer({
        map: map,
      }), 
    console.log(origin);
    // get route from A to B
    calculateAndDisplayRoute(
      directionsService,
      directionsDisplay,
      start,
      end
    );
  }
  
  function calculateAndDisplayRoute(
    directionsService,
    directionsDisplay,
    start,
    end
  ) {
    directionsService.route(
      {
        origin:start,
        destination: end,
        avoidTolls: true,
        avoidHighways: false,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }
document.getElementById("rota").addEventListener("click",function(){
  window.open(
            "https://www.google.com/maps/dir/'" +
              myArray[baslangic]["lat"] +
              "," +
              myArray[baslangic]["lng"] +
              "'/'" +
              myArray_2[son]["lat"] +
              "," +
             myArray_2[son]["lng"] +
              "'/",
            "_blank"
          );
})