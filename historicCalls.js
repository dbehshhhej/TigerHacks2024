import { getCoordinates } from "./latlong_converter.js";
import { getHistoricalData } from "./historical_data_call.js";

async function saveHistoricalData(cityName, state, plantDateRaw) {
  try {
    // Wait for coordinates to be fetched
    const data = await getCoordinates(cityName, state);
    const latitude = data.latitude;
    const longitude = data.longitude;
    var plantDate = new Date(plantDateRaw);
    var plantDateUnix = plantDate.getTime();
    plantDateUnix = toMidnightUnix(plantDateUnix);



    let data2 = {
      cities: {
        [cityName]: {
          lat: latitude,
          lon: longitude,
          dates: {
            [plantDateUnix]: {
              
              maxTemp: 20,
              minTemp: 10,
            },
            [plantDateUnix + 86400 ]: {

              maxTemp: 22,
              minTemp: 12,
            },
          },
        },
      },
    };

     
    var dataStored = false;
    try
    {
        var stored = JSON.parse(localStorage.getItem("Historical_data_GDD"));
        if(stored == null)
        {
            stored = { cities: {} };
            localStorage.setItem("Historical_data_GDD",JSON.stringify(stored));
        }
        if (!stored.cities[cityName]) {
            
            stored.cities[cityName] = {
                lat: latitude,
                lon: longitude,
                dates: {},
            };
        }
        localStorage.setItem("Historical_data_GDD",JSON.stringify(stored));
        
    } catch(error)
    {
        console.log(error);
    }
    var currentDateUnix = 1712206800;
    for(let day = plantDateUnix; day < currentDateUnix; day += 86400 )
    {
        
        // Make a call to get data, if needed
        var temps = getHistoricalData(latitude, longitude, day);
        console.log(day);
        console.log(temps);
        stored.cities[cityName].dates[plantDateUnix] = {
        maxTemp: temps.maxTemp,
        minTemp: temps.minTemp
        
        };
    }
        

        localStorage.setItem("Historical_data_GDD",JSON.stringify(stored));
        console.log(JSON.parse(localStorage.getItem("Historical_data_GDD")));



  } catch (error) {
    console.error("Error fetching coordinates:", error);
  }
}

document.getElementById("textCalls").addEventListener("click", function () {
  const city = document.getElementById("cityInput").value;
  const state = document.getElementById("stateInput").value;
  const plantDate = document.getElementById("plantDate").value;
  saveHistoricalData(city, state, plantDate);
});

function toMidnightUnix(unixTimestamp) {//This was a function directly from chatGPT
    // Create a Date object from the Unix timestamp
    const date = new Date(unixTimestamp);

    // Set the time to midnight (00:00:00.000)
    date.setHours(0, 0, 0, 0);

    // Return the Unix timestamp for midnight
    return Math.floor(date.getTime()/1000); // Convert to seconds
}
