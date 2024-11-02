function saveHistoricalData(cityName, plantDate)
{
    //convert city name to long and lat
    var longitude;
    var latitude;

    var stored = JSON.parse(localStorage.getItem(latitude+","+longitude));

    if(stored[date] == null)
    {
        console.log("no cookiee");
        //make a call to get data
        //convert large data to better format
        
        //make a cookie
        localStorage.setItem(latitude+","+longitude, JSON.stringify(/*the object*/));

    }
    else
    {
        console.log("Cookie found");
        console.log(stored);
    }
    
}