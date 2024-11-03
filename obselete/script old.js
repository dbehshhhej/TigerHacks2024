// Retrieves values from HTML elements
let plant = document.querySelector("#plant").value;
let state = document.querySelector("#state").value;
let city = document.querySelector("#city").value;
let directPlantDate = document.querySelector("#plant-date"); // Ideally in ISO format
let directCurrentDate = document.querySelector("#current-date");
let emergence = document.querySelector("#emergence");
let calculateButton = document.querySelector("#calculate-button");

let demoMode = true; // Use to determine if function should be called!

import { baseTemps, emergenceGDD } from "../constants.js";
// import { getCoordinates } from "./latlong_converter.js";
// import { projectDaysRemaining } from "./linear_projection.js";
// import { getFutureForecast } from "./future_forecast.js";

// let lat = 2389752; // Temp vals, set from function calls
// let long = 1492385702;

// Event listener, activated on click
calculateButton.addEventListener("click", async function () {
  console.log(directPlantDate.value);
  let gddAccum = 0; // Accumulated GDD so far

  let plantDate = new Date(directPlantDate.value); // Reformatted planting date
  console.log(plantDate);

  const centralOffset = plantDate.getTimezoneOffset() / 60; // Adjustment for time zone from default
  plantDate.setHours(plantDate.getHours() + centralOffset);

  let currentDate = new Date(directCurrentDate.value);

  let date = new Date(plantDate); // Placeholder date for calculation

  // Loops through PAST dates
  while (date <= currentDate) {
    let tempEntry = await getTempData(date); // Pulls array of temperatures from JSON
    let highTemp = tempEntry[0];
    let lowTemp = tempEntry[1];
    console.log(tempEntry);

    gddAccum += calcGDD(highTemp, lowTemp, plant); // Calculates total accumulated GDD, up to the present
    date.setDate(date.getDate() + 1); // Increments the date
  }

  let daysTillEmerge = 0;
  let currentAcumGDD = gddAccum; // Holds the accumulated GDD up to the present

  // Loops through FUTURE dates
  while (gddAccum < emergenceGDD[plant]) {
    let tempEntry = await getTempData(date); // Pulls array of temperatures from JSON
    let highTemp = tempEntry[0];
    let lowTemp = tempEntry[1];

    gddAccum += calcGDD(highTemp, lowTemp, plant); // Calculates total accumulated GDD, up to the present
    daysTillEmerge++; // Adds one to the days till emergence
    date.setDate(date.getDate() + 1); // Increments the date
  }

  console.log(daysTillEmerge);
  emergence.textContent = `You have ${daysTillEmerge} days till emergence.`; // Updates text box with emergence dates
});

// Helper functions begin HERE
/// Calculates the GDD for a given high temp, low temp, and plant (String)
function calcGDD(highTemp, lowTemp, plant) {
  return Math.max((highTemp + lowTemp) / 2 - baseTemps[plant], 0);
}

/// Pulls the temperature data from the JSON, stores the high and low temps in an array, and returns the array
async function getTempData(date, city) {
  let response;
  switch (city) {
    case "Columbia":
      response = await fetch("Columbia_Temp_Data.json");
      break;
    default:
      break;
  }
  let tempData = await response.json();
  let formattedDate = date.toISOString().split("T")[0];

  let tempEntry = [];
  tempEntry[0] = tempData[formattedDate]?.["HighTemp"];
  tempEntry[1] = tempData[formattedDate]?.["LowTemp"];
  return tempEntry;
}
