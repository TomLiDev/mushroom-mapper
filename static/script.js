
/** Custom JS written to support button click functions such as toast messages */

document.addEventListener("DOMContentLoaded", function () {
  console.log("test");
  if (document.getElementsByTagName("h1")[0].id === "welcome-text") {
    console.log(document.getElementsByClassName("hidden-created-on")[0].innerText)
    console.log(document.getElementsByClassName("hidden-author")[0].innerHTML)
    console.log(document.getElementsByClassName("hidden-coordinates")[0].innerHTML)
    const dates = document.getElementsByClassName("hidden-created-on")
    const coordinates = document.getElementsByClassName("hidden-coordinates")
    console.log("TEST in first grab", dates[0].innerText)

    datesTemp = []
    authorsTemp = []
    latsTemp = []
    lngsTemp = []


    for (i = 0; i < dates.length; i++) {
      console.log(dates[i].innerText)
      let date = dates[i].innerText
      datesTemp.push(date)
      sessionStorage.setItem("MarkerDates", datesTemp)
    };
    console.log("TEST AFTER LOOP", sessionStorage.getItem("MarkerDates"))

    for (i = 0; i < coordinates.length; i++) {
      console.log(coordinates[i].innerText)
      let latiPlace = parseFloat(coordinates[i].innerText.slice(1, 18))
      let lngiPlace = parseFloat(coordinates[i].innerText.slice(20, 39))
      latsTemp.push(latiPlace)
      lngsTemp.push(lngiPlace)
      console.log("DATA CHECK", typeof latiPlace, typeof lngiPlace)
    };
    console.log("Test after loop", latsTemp, lngsTemp)

  };

  let button = document.getElementById("delete-find-button");
});

function myTrigger() {
    console.log("test csssssssssssssssssssssssss")
    let slug = document.getElementById("find-slug-from-views-html").innerHTML;
    
    const toast = new bootstrap.Toast(myDeleteFindToast)

    toast.show()
};

function myTrigger2() {
    console.log("test 3", this.slug)
};


let map;

async function initMap() {
  console.log("Map test")
  // The deafult starting location of the map
  const position = { lat: 51.508742, lng: -0.120850 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at default start location
  map = new Map(document.getElementById("map"), {
    zoom: 6,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at start point
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
  });

  console.log("Marker Test", sessionStorage.getItem("MarkerPlaces"))

  positionsTest = []

  for (let i = 0; i < placesTemp.length; i++) {
    console.log(placesTemp[i])
    lati = placesTemp[i].slice(1, 18)
    lngi = placesTemp[i].slice(20, 39)
    console.log("lat", lati)
    console.log("lng", lngi)
    
    parseFloat(lati)
    parseFloat(lngi)
    console.log("DATA", typeof"lati")
    let tempPosition = `{ lat: ${lati}, lng: ${lngi} }`;
    console.log("Working?", tempPosition)

    new AdvancedMarkerElement({
      map: map,
      position: { lat: lati, lng: lngi},
    })
  }

  marker.addListener('click', function(){
    console.log("Click test")
    map.setZoom(9);
  });

  let infoWindow = new google.maps.InfoWindow({
    content: "Click the map to get Lat/Lng!",
    position: position,
  });

  infoWindow.open(map);

  map.addListener('click', function(){
    console.log("Second click test")
    map.setZoom(8);
  });

  map.addListener('click', (mapsMouseEvent) => {
    infoWindow.close();
    infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
    infoWindow.setContent(
      JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2),
    );
    infoWindow.open(map);
  } );

  map.addListener('click', (e) => {
    placeMarkerAndPan(e.latLng, map);
  });
  
  function placeMarkerAndPan(latLng, map) {
    new google.maps.Marker({
      position: latLng,
      map: map,
    });
    map.panTo(latLng)
    console.log("Marker place test")
    sessionStorage.setItem("StoringTest", latLng)
    console.log(sessionStorage.getItem("StoringTest"))
    
    if (document.getElementsByTagName("h2")[0].id === "create-find") {
      document.getElementById("id_location_coordinates").innerText = sessionStorage.getItem("StoringTest")
    };
  }

  console.log("Map test end")
}

initMap();

