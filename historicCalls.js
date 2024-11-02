import { getCoordinates } from "./latlong_converter.js";

async function saveHistoricalData(cityName, state, plantDate) {
  try {
    // Wait for coordinates to be fetched
    const data = await getCoordinates(cityName, state);
    const latitude = data.latitude;
    const longitude = data.longitude;

    console.log(data);
    console.log(latitude);
    console.log(longitude);

    let data2 = {
      cities: {
        [cityName]: {
          lat: latitude,
          lon: longitude,
          dates: {
            1633046400: {
              // Unix time for 2021-10-01
              maxTemp: 20,
              minTemp: 10,
            },
            1633132800: {
              // Unix time for 2021-10-02
              maxTemp: 22,
              minTemp: 12,
            },
          },
        },
      },
    };

    localStorage.setItem("GDD_data", JSON.stringify(data2));

    var stored = JSON.parse(localStorage.getItem("GDD_data"));

    if (!stored[cityName]?.dates[plantDate]) {
      console.log("No data found for this date");
      if (!stored[cityName]) {
        console.log("No data found for this position");
      }
      // Make a call to get data, if needed
    } else {
      console.log("Data found");
      console.log(stored);
    }
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
