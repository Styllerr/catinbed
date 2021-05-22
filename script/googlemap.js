let map;

function initMap() {
    console.log('Create map now!')
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 49.988358, lng: 36.232845 },
        zoom: 8,
    });
}