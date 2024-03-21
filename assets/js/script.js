



if (navigator.geolocation) {
    // Get current position
    navigator.geolocation.getCurrentPosition(showPosition, showError);
} else {
    // Geolocation is not supported
    document.getElementById('demo').innerHTML = "Geolocation is not supported by this browser.";
}

// Callback function to handle successful retrieval of position
function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    document.getElementById('demo').innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
    console.log(latitude);
    console.log(longitude);
}

// Callback function to handle errors
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('demo').innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('demo').innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            document.getElementById('demo').innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('demo').innerHTML = "An unknown error occurred."
            break;
    }
}