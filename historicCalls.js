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