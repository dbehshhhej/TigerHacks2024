import {
  baseTemps,
  emergenceGDD,
  pestData,
  temperatureData,
} from "./constants.js";
// import { getCoordinates } from "./latlong_converter.js";
// import { projectDaysRemaining } from "./linear_projection.js";
import { getFutureForecast } from "./future_forecast_call.js";
import { projectDaysRemaining } from "./linear_projection.js";

// Retrieves values from HTML elements
let plant = document.querySelector("#plant").value;
let state = document.querySelector("#state").value;
let city = document.querySelector("#city").value;
let directPlantDate = document.querySelector("#plant-date"); // Ideally in ISO format
let directCurrentDate = document.querySelector("#current-date");
let emergenceBox = document.querySelector("#emergence");
let pestsPresentBox = document.querySelector("#pests-present");
let calculateButton = document.querySelector("#calculate-button");

let demoMode = true; // Use to determine if function should be called!

// let lat = 2389752; // Temp vals, set from function calls
// let long = 1492385702;

// Event listener, activated on click
calculateButton.addEventListener("click", async function () {
  let gddAccum = 0; // Accumulated GDD so far

  let plantDate = new Date(directPlantDate.value); // Reformatted planting date
  const centralOffset = plantDate.getTimezoneOffset() / 60; // Adjustment for time zone from default
  plantDate.setHours(plantDate.getHours() + centralOffset);

  let currentDate = new Date(directCurrentDate.value);
  let placeholderDate = new Date(plantDate);
  let currentAcumGDD;

  if (!demoMode) {
    // Acual historical data calculation goes here
  } else {
    // Placeholder date for calculation

    // Loops through PAST dates
    while (placeholderDate <= currentDate) {
      let tempEntry = await getTempData(placeholderDate, city); // Pulls array of temperatures from JSON
      let highTemp = tempEntry[0];
      let lowTemp = tempEntry[1];

      gddAccum += calcGDD(highTemp, lowTemp, plant); // Calculates total accumulated GDD, up to the present
      placeholderDate.setDate(placeholderDate.getDate() + 1); // Increments the date
      currentAcumGDD = gddAccum; // Holds the accumulated GDD up to the present
    }
  }

  let daysTillEmerge = 0;

  if (!demoMode) {
    // Calculates remaining days till emergence using forecast
    remainingGDD = emergenceGDD[plant] - currentAcumGDD;
    futureData = getFutureForecast(city, state);
    daysRemaining = projectDaysRemaining(futureData, remainingGDD);
    updateEmergenceBox(`You have ${daysTillEmerge} days till emergence.`);
  } else {
    // Loops through FUTURE dates
    while (gddAccum < emergenceGDD[plant]) {
      let tempEntry = await getTempData(placeholderDate); // Pulls array of temperatures from JSON
      let highTemp = tempEntry[0];
      let lowTemp = tempEntry[1];

      gddAccum += calcGDD(highTemp, lowTemp, plant); // Calculates total accumulated GDD, up to the present
      daysTillEmerge++; // Adds one to the days till emergence
      placeholderDate.setDate(placeholderDate.getDate() + 1); // Increments the date
    }

    updateEmergenceBox(`You have ${daysTillEmerge} days till emergence.`); // Updates text box with emergence dates

    updatePestsTextBox(gddAccum, pestData);
  }
});

// Helper functions begin HERE
/// Calculates the GDD for a given high temp, low temp, and plant (String)
function calcGDD(highTemp, lowTemp, plant) {
  return Math.max((highTemp + lowTemp) / 2 - baseTemps[plant], 0);
}

function calcAccumGDD() {}

/// Pulls the temperature data from the constants file, stores the high and low temps in an array, and returns the array
async function getTempData(date, city) {
  let formattedDate = date.toISOString().split("T")[0];

  let tempData = temperatureData[city][formattedDate];

  let tempEntry = [];
  tempEntry[0] = tempData["HighTemp"];
  tempEntry[1] = tempData["LowTemp"];
  return tempEntry;
}

function getPestsPresent(gddAccum, pestData) {
  let pestsPresent = [];

  for (const pest of pestData) {
    if (gddAccum > pest.gddRange.minGdd && gddAccum < pest.gddRange.maxGdd) {
      pestsPresent.push(pest["pest"]);
    }
  }

  return pestsPresent;
}

function updatePestsTextBox(gddAccum, pestData) {
  // Get the pests present
  const pestsPresent = getPestsPresent(gddAccum, pestData);

  if (pestsPresent.length == 0) {
    pestsPresentBox.value = "There are no pests present.";
  } else {
    // Convert the array to a comma-separated string
    const pestsList = pestsPresent.join(", ");
    pestsPresentBox.value = pestsList;
    console.log(pestsList);
  }
}

function updateEmergenceBox(message) {
  emergenceBox.textContent = message;
}
