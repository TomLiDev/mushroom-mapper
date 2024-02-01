/** Custom JS written to support button click functions such as toast messages */

document.addEventListener("DOMContentLoaded", function () {
    console.log("test");
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
    title: "Uluru",
  });

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
    const formLocation = document.createElement("div");
    formLocation.innerText = sessionStorage.getItem("StoringTest");
    document.body.append(formLocation);
    document.getElementById("location-test").innerHTML = sessionStorage.getItem("StoringTest");
    document.getElementById("id_content").innerText = sessionStorage.getItem("StoringTest");
    document.getElementById("id_location").innerText = sessionStorage.getItem("StoringTest");
    document.getElementById("id_location_coordinates").innerText = sessionStorage.getItem("StoringTest");
  }

  console.log("Map test end")
}

initMap();

