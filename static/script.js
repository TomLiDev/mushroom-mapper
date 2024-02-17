
/** This section contains controlling statements to trigger map initilisation and creation of data used in map,
most of this section is for creating the latitude and longitude data points needed to place custom markers
on the map to show the location of existing finds */

let latsTemp = [];
let lngsTemp = [];
let slugsTemp = [];

document.addEventListener("DOMContentLoaded", function () {

	/** This first if statement simply triggers map initiliation, and nothing else
	 * if the page is the create find page.
	 */
	
	if (document.querySelectorAll("div.hidden").length > 1) {
		initMap();
	}

	/** This if statement triggers the creation of the necessary data to create the 
	 * map markers, if the page is the index page.
	 */

	if (document.querySelectorAll("div.hidden").length === 1) {
		/* This section takes the coordinates and slugs from the finds held in
		the hidden div on the index page. */
		const coordinates = document.getElementsByClassName("hidden-coordinates");
		let slugs = document.getElementsByClassName("hidden-slugs");

		/* The below for loop iterates through the slugs and coordinates and creates a separate array 
		for the slugs, longitudes, and latitudes. These are used later for the creation of the map
		markers. */

		for (let i = 0; i < slugs.length; i++) {
			let slugString = JSON.stringify(slugs[i].innerText);
			slugsTemp.push(slugString);
			let latiPlace = parseFloat(coordinates[i].innerText.slice(1, 18));
			let lngiPlace = parseFloat(coordinates[i].innerText.slice(20, 39));
			latsTemp.push(latiPlace);
			lngsTemp.push(lngiPlace);
		}

		initMap();
		
	}

});


/** This section contains the main map function itself */

let map;

async function initMap() {
	// The default starting location of the map
	const position = { lat: 51.508742, lng: -0.120850 };
	// Request needed libraries.
	const { Map } = await google.maps.importLibrary("maps");

	// The map, centered at default start location
	map = new Map(document.getElementById("map"), {
		zoom: 8,
		center: position,
		mapId: "DEMO_MAP_ID",
  	});

	/* The below function places the markers on the map */

	function createExistingMarkers () {
		let infowindow = new google.maps.InfoWindow();
		var marker, i;

		for (let i = 0; i < latsTemp.length; i++) {
			marker = new google.maps.Marker({
				map: map,
				position: new google.maps.LatLng(latsTemp[i], lngsTemp[i]),
				title: slugsTemp[i],
			});

	/* This section of the function places a click listener on each marker and 
	customises the info window, shown on click, to include an anchor which will
	redirect to the relevant find detail page. */

	google.maps.event.addListener(marker, 'click', (function(marker, i) {
		return function() {
			let text = slugsTemp[i];
			let text2 = `https://mushroom-mapper-6a227ba72c70.herokuapp.com/${text}`;
			let text3 = text2.replace(/['"]+/g, '');
			let anchor = document.createElement('a');
			anchor.href = text3;
			anchor.innerText = 'View this find';

			infowindow.setContent(anchor);
			infowindow.open(map, marker);
		};
	})(marker, i));
	}
	}

	/* The if statement below triggers the create markers function, and
	customises the welcome marker start message for loading on the index page */
	
		if (document.getElementsByClassName("hidden")[0].id === "hidden-index") {

			infoText = "Scoll around the map to view finds";

			let infoWindowStart = new google.maps.InfoWindow({
				content: infoText,
				position: position,
			  });
		
			infoWindowStart.open(map);

			createExistingMarkers();
		}

	/* Below is the code for placing and recreating the map marker on create-find page */

	if (document.getElementsByClassName("hidden")[0].id ==="hidden-create") {

		map.addListener('click', (mapsMouseEvent) => {
			infoWindow.close();
			infoWindow = new google.maps.InfoWindow({
				position: mapsMouseEvent.latLng,
	});

	infoWindow.setContent(
			JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
	);	
	infoWindow.open(map);
	});

	/* The below click listener and function take the latitude and longitude from
	the location clicked on the map and store them in session storage, this value
	is used to populate the coordinates field on the create find form. */

	function placeMarker(latLng, map) {
		map.panTo(latLng);
		sessionStorage.setItem("StoringTest", latLng);
		document.getElementById("id_location_coordinates").innerText = sessionStorage.getItem("StoringTest");
	}
	
	map.addListener('click', (e) => {
		placeMarker(e.latLng, map);
	});

	infoText = "Click the location of your find!";
	
  	let infoWindowStart = new google.maps.InfoWindow({
    	content: infoText,
    	position: position,
  	});

  	infoWindowStart.open(map);

	  let infoWindow = new google.maps.InfoWindow({
    	content: infoText,
    	position: position,
  	});

	}
}