
/** This section contains controlling statements to trigger map initilisation and creation of data used in map,
 * most of this code is for creating the latitude and longitude data points needed to place custom markers
 * on the map to show the location of existing finds.
 */

document.addEventListener("DOMContentLoaded", function () {

	console.log("First test")
	
	if (document.getElementsByClassName("hidden")[0].id ==="hidden-create") {

		initMap()
	}

	if (document.getElementsByClassName("hidden")[0].id === "hidden-index") {
		infoText = "Scroll around the map to view other finds!"
		const coordinates = document.getElementsByClassName("hidden-coordinates")
		const slugs = document.getElementsByClassName("hidden-slugs")
		console.log("test", slugs[1].innerText)
		console.log("Early data check for slugs", typeof slugs[0])

		
		latsTemp = []
		lngsTemp = []
		slugsTemp = []


		for (i = 0; i < slugs.length; i++) {
			console.log(slugs[i].innerText)
			let slugString = JSON.stringify(slugs[i].innerText)
			console.log("Slug testin loop", typeof slugString, slugString)
			slugsTemp.push(slugString)
		};
		console.log("Slug test after loop", slugsTemp)

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

		mapMarkerDAta = []

		for (i = 0; i < coordinates.length; i++) {
			tempContainer = []
			tempContainer.push(slugsTemp[i])
			tempContainer.push(latsTemp[i])
			tempContainer.push(lngsTemp[i])
			console.log("container test", tempContainer)
			mapMarkerDAta.push(tempContainer)
		}
		console.log("Full map data test", mapMarkerDAta)
		sessionStorage.setItem("MapData", mapMarkerDAta)

		initMap();
		
	};

});


/** This section contains the main map function itself */

let map;

async function initMap() {
	console.log("Map test")
	// The default starting location of the map
	const position = { lat: 51.508742, lng: -0.120850 };
	// Request needed libraries.
	//@ts-ignore
	const { Map } = await google.maps.importLibrary("maps");
	const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
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
    	position,
  	});

	  function createExistingMarkers () {
		infowindow = new google.maps.InfoWindow()
		var marker, i;

		for (let i = 0; i < latsTemp.length; i++) {
			console.log("Marker test", latsTemp[i])
			marker = new google.maps.Marker({
				map: map,
				position: new google.maps.LatLng(latsTemp[i], lngsTemp[i]),
				title: "Click for Find Details",
			})

			google.maps.event.addListener(marker, 'click', (function(marker, i) {
				return function() {
					text = slugsTemp[i]
					text2 = `http://127.0.0.1:8000/detail/${text}`
					text3 = text2.replace(/['"]+/g, '')
					anchor = document.createElement('a')
					anchor.href = text3;
					anchor.innerText = 'View this find';

				  infowindow.setContent(anchor);
				  infowindow.open(map, marker);
				}
			  })(marker, i));

		}
		}
	
		if (document.getElementsByClassName("hidden")[0].id === "hidden-index") {
			console.log("WAY DOWN")
			createExistingMarkers()
		}

	if (document.getElementsByClassName("hidden")[0].id ==="hidden-create") {
		console.log("This bit")
		infoText = "Click the location of your find!"

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
	}
	


	// Below function is triggered on the homepage only, it creates map markers from existing find locations


	const information = document.createElement("div");
	information.className = "information";
	information.textContent = "This is some text";


	tempTestCoordinates = [
		{
			number: 1,
			position: {
			lat: 50.52990586913295,
			lng: -1.1425785156249924,
		},
	},
	{
		number: 2,
		position: {
		lat: 51.12992586913295,
		lng: -1.1425785156249924,
	},
	},
	{
		number: 3,
		position: {
		lat: 52.12996586913295,
		lng: -1.1425785156249924,
		},
	},
	];


	for	(const i of tempTestCoordinates) {
		console.log("hello")
		console.log(i.position)
		const AdvancedMarkerElement = new google.maps.marker.AdvancedMarkerElement({
			map,
			content: buildContent(i),
			position: i.position,
			title: "W",
			
		})
	};

	function buildContent(i) {
		const content = document.createElement("div");
		content.innerText = "This is text, what testing text this is"
		;
		return content;
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

  console.log("Map test end")
	  }
}

initMap()
