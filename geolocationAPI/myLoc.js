window.onload = getMyLocation;

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
    


}


function computeDistance(startCoords, destCoords) {
    var startLatRads = degreesToRadians(startCoords.latitude);
    var startLongRads = degreesToRadians(startCoords.longitude);
    var destLatRads = degreesToRadians(destCoords.latitude);
    var destLongRads = degreesToRadians(destCoords.longitude);

    var Radius = 6371
    
}


function degreesToRadians(degrees) {
    var radians = (degrees * Math.PI)/180;
    return radians;
}