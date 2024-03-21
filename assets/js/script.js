


/*
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
    console.log(position.coords);
}

// Callback function to handle errors
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
           
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");

        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
           
    }
}

*/





if (navigator.geolocation) {
    // Get current position
    navigator.geolocation.getCurrentPosition(showPosition, showError);
} else {
    // Geolocation is not supported
    document.getElementById('showLocation').innerHTML = "Geolocation is not supported by this browser.";
}

// Callback function to handle successful retrieval of position
function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // URL to fetch location data
    var url = "https://geocode.maps.co/reverse?lat=" + latitude + "&lon=" + longitude + "&api_key=65fbf0f60c714938220497wav8b6bfd";

   
    // Fetch data from the URL
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Check if the data contains a valid location name
            if (data) {
                document.getElementById('locationName').innerText = data.address.amenity;
                document.getElementById('demo').innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
                
                
            } else {
                document.getElementById('locationName').innerText = "Location name not found.";
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('locationName').innerText = "Error fetching location name.";
        });

    }

// Callback function to handle errors
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('locationName').innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('locationName').innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            document.getElementById('locationName').innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('locationName').innerHTML = "An unknown error occurred."
            break;
    }

}








function fetchPollenData() {
    // Check if geolocation is supported by the browser
    if (navigator.geolocation) {
        // Get current position
        navigator.geolocation.getCurrentPosition(
            function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                console.log(position);

                // URL to fetch pollen data from the API
                var apiUrl = "https://air-quality-api.open-meteo.com/v1/air-quality?latitude=" + latitude + "&longitude=" + longitude + "&current=alder_pollen,birch_pollen,grass_pollen,mugwort_pollen,olive_pollen,ragweed_pollen&hourly=alder_pollen,birch_pollen,grass_pollen,mugwort_pollen,olive_pollen,ragweed_pollen&timezone=Europe%2FBerlin";
              // var apiUrl = "https://air-quality-api.open-meteo.com/v1/air-quality?latitude=" + latitude + "&longitude=" + longitude + "&hourly=pm10,pm2_5,grass_pollen";

                // Fetch pollen data from the API
                fetch(apiUrl)
                    .then(response => response.json())
                    .then(data => {
                       
                        // Check if the data contains pollen information
                        if (data) {
                            
                            const pollenData = data.current;
                            console.log(data);

                            var pollenDiv = document.getElementById('pollenData');
                            pollenDiv.innerHTML = ""; 
                            if (data.current.alder_pollen == 0) {
                    
                            pollenDiv.innerHTML="<p>" + data.current.time + " , AlderPolen: <span class='test'>" + data.current.alder_pollen + "</span> , Interval: " + data.current.interval
                             + " , BirchPollen: " + data.current.birch_pollen + " , GrassPollen: " + data.current.grass_pollen + " , MugwortPollen: " + data.current.grass_pollen + "</p>"; } else {
                                pollenDiv.innerHTML="<p>" + data.current.time + " , AlderPolen: <span class='no'>" + data.current.alder_pollen + "</span> , Interval: " + data.current.interval
                             + " , BirchPollen: " + data.current.birch_pollen + " , GrassPollen: " + data.current.grass_pollen + "</p>";

                             }

                            
/*
                            Object.keys(pollenData).forEach(function(key) {

                                pollenDiv.innerHTML += "<h5>" + key.replace('_', ' ').toUpperCase() + ":</h5>" + pollenData[key] + "<br>";

                               // pollenDiv.innerHTML += pollenData[key] + "<br>";
                            });
*/

                          

                           
                        } else {
                            document.getElementById('pollenData').innerHTML = "Pollen data not available for your location.";
                        }
                    })
                    .catch(error => {
                        console.error('Error fetching pollen data:', error);
                        document.getElementById('pollenData').innerHTML = "Error fetching pollen data.";
                    });
            },
            function(error) {
                console.error('Error getting geolocation:', error);
                document.getElementById('pollenData').innerHTML = "Error getting geolocation.";
            }
        );
    } else {
        // Geolocation is not supported
        document.getElementById('pollenData').innerHTML = "Geolocation is not supported by this browser.";
    }


}

// Call the fetchPollenData function when the page loads
window.onload = fetchPollenData;













function fetchPollenData() {
    // Check if geolocation is supported by the browser
    if (navigator.geolocation) {
        // Get current position
        navigator.geolocation.getCurrentPosition(
            function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                console.log(position);

                // URL to fetch pollen data from the API
                var apiUrl = "https://air-quality-api.open-meteo.com/v1/air-quality?latitude=" + latitude + "&longitude=" + longitude + "&current=alder_pollen,birch_pollen,grass_pollen,mugwort_pollen,olive_pollen,ragweed_pollen&hourly=alder_pollen,birch_pollen,grass_pollen,mugwort_pollen,olive_pollen,ragweed_pollen&timezone=Europe%2FBerlin";
              // var apiUrl = "https://air-quality-api.open-meteo.com/v1/air-quality?latitude=" + latitude + "&longitude=" + longitude + "&hourly=pm10,pm2_5,grass_pollen";

                // Fetch pollen data from the API
                fetch(apiUrl)
                    .then(response => response.json())
                    .then(data => {
                       
                        // Check if the data contains pollen information
                        if (data) {
                            
                            const pollenData = data.current;
                           // console.log(data);

                            var pollenDiv = document.getElementById('pollenData');
                            pollenDiv.innerHTML = ""; 
                            if (data.current.alder_pollen == 0) {
                    
    
    let myViewData = []
    
   
    
     myViewData.push(data.current)
    
    buildPullView(myViewData)
    }
    
    function buildPullView(viewData) {
    
    let myDisplayElement = document.getElementById('secondPolen')
    
    let myCurrentData = viewData[0];
    console.log(myCurrentData);
    
    let displayMyData = ` <section>
    <h2>test</h2>
    <ul>
        <li>AlderPolen: ${myCurrentData.alder_pollen} </li>
        <li>BirchPollen: ${myCurrentData.birch_pollen} </li>
        <li>Grass pollen ${myCurrentData.grass_pollen}</li>
        <li>Mugwort pollen: ${myCurrentData.mugwort_pollen}</li>
        <li>Olive_pollen ${myCurrentData.olive_pollen}</li>
        <li>Ragweed pollen ${myCurrentData.ragweed_pollen}</li>
    
    </ul>
    </section>`
    
    myDisplayElement.innerHTML = displayMyData;
    }


            



                            
/*
                            Object.keys(pollenData).forEach(function(key) {

                                pollenDiv.innerHTML += "<h5>" + key.replace('_', ' ').toUpperCase() + ":</h5>" + pollenData[key] + "<br>";

                               // pollenDiv.innerHTML += pollenData[key] + "<br>";
                            });
*/

                          

                           
                        } else {
                            document.getElementById('pollenData').innerHTML = "Pollen data not available for your location.";
                        }
                    })
                    .catch(error => {
                        console.error('Error fetching pollen data:', error);
                        document.getElementById('pollenData').innerHTML = "Error fetching pollen data.";
                    });
            },
            function(error) {
                console.error('Error getting geolocation:', error);
                document.getElementById('pollenData').innerHTML = "Error getting geolocation.";
            }
        );
    } else {
        // Geolocation is not supported
        document.getElementById('pollenData').innerHTML = "Geolocation is not supported by this browser.";
    }


}

// Call the fetchPollenData function when the page loads
window.onload = fetchPollenData;







