import { getCoordinates } from "./latlong_converter.js";
function saveHistoricalData(cityName, state, plantDate)
{
    //convert city name to long and lat
    var data = getCoordinates(cityName, state);
    var latitude = data.latitude;
    var longitude = data.longitude;
    console.log(data);
    console.log(latitude);
    console.log(longitude);
    
    let data2 = {
        "cities": {
            cityName: {
                "lat": latitude,
                "lon": longitude,
                "dates": {
                    "1633046400": { // Unix time for 2021-10-01
                        "maxTemp": 20,
                        "minTemp": 10
                    },
                    "1633132800": { // Unix time for 2021-10-02
                        "maxTemp": 22,
                        "minTemp": 12
                    }
                }
            },
            
        }
    };
    localStorage.setItem("GDD_data", JSON.stringify(data2));



    var stored = JSON.parse(localStorage.getItem("GDD_data"));
    
    //loop below

    if(stored[cityName][plantDate] == null)
    {
        console.log("no cookiee for this date");
        if(stored[cityName] == null)
            {
                console.log("no cookiee for this Position");
   
            }
        //make a call to get data
        //convert large data to better format
        
        //make a cookie
        //localStorage.setItem("GDD_data", JSON.stringify(/*the object*/));

    }
    else
    {
        console.log("Cookie found");
        console.log(stored);
    }
    
}
document.getElementById('getGeocode').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const state = document.getElementById('stateInput').value;
    getCoordinates(city, state);
});

document.getElementById('textCalls').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const state = document.getElementById('stateInput').value;
    const plantDate = document.getElementById('plantDate').value;
    saveHistoricalData(city, state, plantDate);
});