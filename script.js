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
import { saveHistoricalData } from "./historicCalls.js";

// Retrieves values from HTML elements
let plant = document.querySelector("#plant").value;
let state = document.querySelector("#state").value;
let city = document.querySelector("#city").value;
let directPlantDate = document.querySelector("#plant-date"); // Ideally in ISO format
let directCurrentDate = document.querySelector("#current-date");
let emergenceBox = document.querySelector("#emergence");
let pestsPresentBox = document.querySelector("#pests-present");
let calculateButton = document.querySelector("#calculate-button");
let accumGDDBox = document.querySelector("#gdd-accum");

let demoModePast = true; // Demo mode for calculating up to the present date
let demoModeFuture = true; // Demo mode for calculating into the future

// Updates values on change
document.querySelector("#plant").addEventListener("change", function () {
  plant = document.querySelector("#plant").value;
});

document.querySelector("#state").addEventListener("change", function () {
  state = document.querySelector("#state").value;
});

document.querySelector("#city").addEventListener("change", function () {
  city = document.querySelector("#city").value;
});

// let lat = 2389752; // Temp vals, set from function calls
// let long = 1492385702;

// Event listener, activated on click
calculateButton.addEventListener("click", async function () {
  plant = document.querySelector("#plant").value;
  state = document.querySelector("#state").value;
  city = document.querySelector("#city").value;

  let gddAccum = 0; // Accumulated GDD so far

  let plantDate = new Date(directPlantDate.value); // Reformatted planting date
  const centralOffset = plantDate.getTimezoneOffset() / 60; // Adjustment for time zone from default
  plantDate.setHours(plantDate.getHours() + centralOffset);

  let currentDate = new Date(directCurrentDate.value);
  let placeholderDate = new Date(plantDate); // Placeholder date for calculation
  let currentAcumGDD = 0;

  let historicalData;

  // UP TO CURRENT DATE
  if (!demoModePast) {
    // Acual historical data calculation goes here
    console.log(city, state, directPlantDate.value, directCurrentDate.value);
    historicalData = await saveHistoricalData(
      city,
      state.value,
      directPlantDate.value,
      directCurrentDate.value
    );
    console.log(historicalData);

    let incrementDate = plantDate.getTime() / 1000;
    while (incrementDate <= currentDate.getTime() / 1000) {
      let tempEntry = historicalData[incrementDate];
      let highTemp = tempEntry.maxTemp;
      let lowTemp = tempEntry.minTemp;

      gddAccum += calcGDD(highTemp, lowTemp, plant); // Calculates total accumulated GDD, up to the present
      incrementDate += 86400; // Increments the date by one day, in seconds
      currentAcumGDD = gddAccum; // Holds the accumulated GDD up to the present
    }
  } else {
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

  let daysTillEmerge = 0; // initialize variable
  let remainingGDD = 0; // initialize variable

  // DAYS REMAINING
  if (!demoModeFuture) {
    // Calculates remaining days using forecast
    remainingGDD = emergenceGDD[plant] - currentAcumGDD;
    // futureData = await getFutureForecast(city, state);
    let futureData = JSON.parse(localStorage.getItem("TempData.json"));
    daysRemaining = projectDaysRemaining(futureData, remainingGDD);

    updateEmergenceBox(
      `You have ${daysTillEmerge} days until your crops emerge!!`
    );

    // Updates emergence box based on conditions
    if (daysTillEmerge == 0) {
      updateEmergenceBox("Your crops have emerged!");
    } else if (daysTillEmerge == null) {
      updateEmergenceBox(
        `It is too cold for your crops to emerge. Maybe try somewhere else.`
      );
    } else {
      updateEmergenceBox(
        `You have ${daysTillEmerge} days until your crops emerge!`
      );
    }
  } else {
    // Loops through FUTURE dates using dataset

    console.log("Future calc starting here");
    const MAX_ITERATIONS = 100;
    while (gddAccum < emergenceGDD[plant]) {
      if (daysTillEmerge >= MAX_ITERATIONS) {
        console.warn(
          "Reached maximum iteration limit; setting daysTillEmerge to null."
        );
        daysTillEmerge = null;
        break;
      }

      let tempEntry = await getTempData(placeholderDate, city); // Pulls array of temperatures from JSON
      let highTemp = tempEntry[0];
      let lowTemp = tempEntry[1];

      gddAccum += calcGDD(highTemp, lowTemp, plant); // Calculates total accumulated GDD, up to the present
      daysTillEmerge++; // Adds one to the days till emergence
      placeholderDate.setDate(placeholderDate.getDate() + 1); // Increments the date
    }

    // Updates emergence box based on conditions
    if (daysTillEmerge == 0) {
      updateEmergenceBox("Your crops have emerged!");
    } else if (daysTillEmerge == null) {
      updateEmergenceBox(
        `It is too cold for your crops to emerge. Maybe try somewhere else.`
      );
    } else {
      updateEmergenceBox(
        `You have ${daysTillEmerge} days until your crops emerge!`
      );
    }

    updateAccumGDDBox(gddAccum);
    updatePestsTextBox(gddAccum, pestData);
    console.log(crop);
  }
});

// Helper functions begin HERE
/// Calculates the GDD for a given high temp, low temp, and plant (String)
function calcGDD(highTemp, lowTemp, plant) {
  return Math.max((highTemp + lowTemp) / 2 - baseTemps[plant], 0);
}

/// Pulls the temperature data from the constants file, stores the high and low temps in an array, and returns the array
async function getTempData(date, city) {
  let formattedDate = date.toISOString().split("T")[0];

  console.log(city, formattedDate);
  let tempData = temperatureData[city][formattedDate];

  if (tempData == undefined) {
    return [0, 0];
  }

  let tempEntry = [];
  tempEntry[0] = tempData["HighTemp"];
  tempEntry[1] = tempData["LowTemp"];
  console.log(tempEntry);

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
    pestsPresentBox.textContent = "There are no pests present.";
  } else {
    // Convert the array to a comma-separated string
    const pestsList = pestsPresent.join(", ");
    pestsPresentBox.textContent = pestsList;
    console.log(pestsList);
  }
}

function updateEmergenceBox(message) {
  emergenceBox.textContent = message;
}

function updateAccumGDDBox(message) {
  accumGDDBox.textContent = message;
}
