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
  // The location of Uluru
  const position = { lat: 51.508742, lng: -0.120850 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 6,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });

  console.log("Map test end")
}

initMap();
