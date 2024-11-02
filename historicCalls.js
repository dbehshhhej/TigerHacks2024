import { getCoordinates } from "./latlong_converter.js";

async function saveHistoricalData(cityName, state, plantDateRaw) {
  try {
    // Wait for coordinates to be fetched
    const data = await getCoordinates(cityName, state);
    const latitude = data.latitude;
    const longitude = data.longitude;
    var plantDate = new Date(plantDateRaw);
    var plantDateUnix = plantDate.getTime();

    console.log(data);
    console.log(latitude);
    console.log(longitude);

    let data2 = {
      cities: {
        [cityName]: {
          lat: latitude,
          lon: longitude,
          dates: {
            [plantDateUnix]: {
              // Unix time for 2021-10-01
              maxTemp: 20,
              minTemp: 10,
            },
            [plantDateUnix + 86400000]: {
              // Unix time for 2021-10-02
              maxTemp: 22,
              minTemp: 12,
            },
          },
        },
      },
    };
    console.log(data2);

    //loop below
    localStorage.setItem("Historical_data_GDD", JSON.stringify(data2));

    var stored = JSON.parse(localStorage.getItem("Historical_data_GDD"));

    console.log("stored: ");
    console.log(stored);
    if (stored.cities[cityName].dates[plantDateUnix] == null) {
        console.log("No Data found");
        // Make a call to get data, if needed
    } else {
        console.log("Data found");
        console.log(stored.cities[cityName].dates[plantDateUnix]);
    }
    //loop above

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
