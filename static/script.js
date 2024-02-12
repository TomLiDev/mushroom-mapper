
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

	if (document.getElementsByClassName("hidden")[0].id ==="hidden-create") {

		if (localStorage.getItem("find-success") === "yes") {
			console.log("Has this worked?")
			var toastElList = [].slice.call(document.querySelectorAll('.toast'))
			var toastList = toastElList.map(function(toastEl) {
			  return new bootstrap.Toast(toastEl)
			})
			toastList.forEach(toast => toast.show())
			localStorage.setItem("find-success", "no")
		} 

		console.log("Create find page")

		document.getElementById("create-find-form").onsubmit = function() {myFunction()};

		function myFunction() {
		console.log("Create find submitted")
		localStorage.setItem("find-success", "yes")
		console.log(localStorage.getItem("find-success"))
		console.log(typeof localStorage.getItem("find-success"))
		alert("The form was submitted 2");
		}

		initMap()
	}

	let button = document.getElementById("delete-find-button");

	if (document.getElementsByClassName("hidden").length > 1) {
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
		infoText = "Click the location of your find!"

		initMap();
	};

	if (document.getElementsByClassName("hidden").length === 0) {
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

	  if (document.getElementsByTagName("h2")[0].id === "create-find") {

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
	  };

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
