/** Custom JS written to support button click functions such as toast messages */

document.addEventListener("DOMContentLoaded", function () {
    console.log("test");
    let button = document.getElementById("delete-find-button");
    button.addEventListener("click", myTrigger2);
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

var map = L.map('map').setView([51.505, -0.30], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);