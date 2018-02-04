window.onload = getMyLocation;

var ourCoords = {
    latitude: 50.288962,
    longitude: 18.659609
};



function getMyLocation() {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(displayLocation);
    } else {
        alert('brak wsparcia');
    }
    
}

function displayLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var div = document.getElementById('location');
    div.innerHTML = 'Jesteś na szerokości '+ latitude +' długości '+longitude;

    var km = computeDistance(position.coords, ourCoords);
    var distance = document.getElementById('distance');
    distance.innerHTML = 'Jesteś ' + km + ' km od siedziby Helionu';


}


function computeDistance(startCoords, destCoords) {
    var startLatRads = degreesToRadians(startCoords.latitude);
    var startLongRads = degreesToRadians(startCoords.longitude);
    var destLatRads = degreesToRadians(destCoords.latitude);
    var destLongRads = degreesToRadians(destCoords.longitude);

    var Radius = 6371;
    var distance = Math.acos(Math.sin(startLatRads)* Math.sin(destLatRads) + Math.cos(startLatRads)*Math.cos(destLatRads) *
    Math.cos(startLongRads - destLongRads))*Radius;

    return distance;
}


function degreesToRadians(degrees) {
    var radians = (degrees * Math.PI)/180;
    return radians;
}