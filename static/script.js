
/** Custom JS written to support button click functions such as toast messages */

function myTrigger() {
    console.log("test csssssssssssssssssssssssss")
    let slug = document.getElementById("find-slug-from-views-html").innerHTML;
    
    const toast = new bootstrap.Toast(myDeleteFindToast)

    toast.show()
};

function myTrigger2() {
    console.log("test 3", this.slug)
};


/** This section contains controlling statements to trigger map initilisation and creation of data used in map,
 * most of this code is for creating the latitude and longitude data points needed to place custom markers
 * on the map to show the location of existing finds.
 */

document.addEventListener("DOMContentLoaded", function () {
	let button = document.getElementById("delete-find-button");

	if (document.getElementsByClassName("hidden").length > 0) {
		infoText = "Scroll around the map to view other finds!"
		const dates = document.getElementsByClassName("hidden-created-on")
		const coordinates = document.getElementsByClassName("hidden-coordinates")
		const slugs = document.getElementsByClassName("hidden-slugs")
		console.log("test", slugs[1].innerText)
		console.log("Early data check for slugs", typeof slugs[0])
		console.log("TEST in first grab", dates[0].innerText)

		datesTemp = []
		authorsTemp = []
		latsTemp = []
		lngsTemp = []
		slugsTemp = []


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
			sessionStorage.setItem("latsTest", latsTemp)
			sessionStorage.setItem("longTest", lngsTemp)
			console.log("DATA CHECK", typeof latiPlace, typeof lngiPlace, typeof sessionStorage.getItem("latsTest"))
			console.log(sessionStorage.getItem("latsTest"))
		};
		console.log("Test after loop", latsTemp, lngsTemp)

		for (i = 0; i < dates.length; i++) {
			console.log("Slug test in loop", slugs[i].innerText)
			slugNow = String(slugs[i].innerText)
			console.log("Slug 4", slugNow, typeof slugNow)
			slugsTemp.push(slugNow)
			console.log("Slug test final", slugsTemp)
		}
		console.log("Slug test after loop", slugsTemp)

		initMap();
	};

	if (document.getElementsByClassName("hidden").length === 0) {
		infoText = "Click the location of your find!"
		initMap()
	}

});


/** This section contains the main map function itself */

let map;

async function initMap() {
	console.log("Map test")
	// The deafult starting location of the map
	const position = { lat: 51.508742, lng: -0.120850 };
	// Request needed libraries.
	//@ts-ignore
	const { Map } = await google.maps.importLibrary("maps");
	const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
	var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

	// The map, centered at default start location
	map = new Map(document.getElementById("map"), {
		zoom: 8,
		center: position,
		mapId: "DEMO_MAP_ID",
  	});

  	// Initial marker location control
  	const marker = new AdvancedMarkerElement({
    	map: map,
    	position: position,
  	});

	// Below function is triggered on the homepage only, it creates map markers from existing find locations
	function createExistingMarkers () {
	for (let i = 0; i < latsTemp.length; i++) {
		console.log("Marker test", latsTemp[i])
		new google.maps.Marker({
			map: map,
			position: { lat: latsTemp[i], lng: lngsTemp[i]},
		})
	}
	}


	const information = document.createElement("div");
	information.className = "information";
	information.textContent = "This is some text";

	function createAdvancedMarkers () {
	for	(let i = 0; i < latsTemp.length; i++) {
			console.log("Marker test", latsTemp[i])
			new AdvancedMarkerElement({
				map: map,
				position: { lat: latsTemp[i], lng: lngsTemp[i]},
			})
		};
	};
		
	if (document.getElementsByClassName("hidden").length > 0) {
		createAdvancedMarkers()
	}

	marker.addListener('gmp-click', function(){
		console.log("Click test advanced")
	});
	
  	let infoWindowStart = new google.maps.InfoWindow({
    	content: infoText,
    	position: position,
  	});

  	infoWindowStart.open(map);

	marker.addListener('click', function(){
		console.log("Marker click test")
	});

  	map.addListener('click', function(){
    	console.log("Second click test")
    	map.setZoom(8);
  	});

	  let infoWindow = new google.maps.InfoWindow({
    	content: infoText,
    	position: position,
  	});
	
	
	if (document.getElementsByTagName("h2")[0].id === "create-find") {

		map.addListener('click', (mapsMouseEvent) => {
			infoWindow.close();
			infoWindow = new google.maps.InfoWindow({
			  position: mapsMouseEvent.latLng,
		});
		infoWindow.setContent(
			  JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2),
		);	
		infoWindow.open(map);
		 });

		map.addListener('click', (e) => {
			placeMarker(e.latLng, map);
		  });
	  
		function placeMarker(latLng, map) {
		map.panTo(latLng)
		console.log("Marker place test")
		sessionStorage.setItem("StoringTest", latLng)
		console.log(sessionStorage.getItem("StoringTest"))
		document.getElementById("id_location_coordinates").innerText = sessionStorage.getItem("StoringTest")
	  };
	  

	}

  console.log("Map test end")
};
