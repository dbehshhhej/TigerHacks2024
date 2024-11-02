// Retrieves values from HTML elements
let plant = document.querySelector("#plant").value;
let state = document.querySelector("#state").value;
let city = document.querySelector("#city").value;
let directPlantDate = document.querySelector("#plant-date"); // Ideally in ISO format
let emergence = document.querySelector("#emergence");
let calculateButton = document.querySelector("#calculate-button");

const daysSincePlanting = 8; // Number of days prior the present the crop was planted. Will be removed later, since the current date will be used (and days since planting is found between the planting date and the present).

// Base temps of crops
const baseTemps = {
  corn: 50, // Base GDD 50°F
  soybean: 50, // Base GDD 50°F
  wheat: 40, // Base GDD 40°F
  alfalfa: 41, // Base GDD 41°F
  cotton: 60, // Base GDD 60°F
  tomato: 50, // Base GDD 50°F
  lettuce: 40, // Base GDD 40°F
  cucumber: 55, // Base GDD 55°F
  rice: 50, // Base GDD 50°F
  potato: 45, // Base GDD 45°F
};

// Emergence GDD of crops
const emergenceGDD = {
  corn: 90, // Approx. 90 GDDs for corn to emerge
  soybean: 120, // Approx. 120 GDDs for soybean
  wheat: 180, // Approx. 180 GDDs for wheat
  alfalfa: 200, // Approx. 200 GDDs for alfalfa
  cotton: 200, // Approx. 200 GDDs for cotton
  tomato: 150, // Approx. 150 GDDs for tomato
  lettuce: 120, // Approx. 120 GDDs for lettuce
  cucumber: 150, // Approx. 150 GDDs for cucumber
  rice: 100, // Approx. 100 GDDs for rice
  potato: 120, // Approx. 120 GDDs for potato
};

// let lat = 2389752; // Temp vals, set from function calls
// let long = 1492385702;

// Event listener, activated on click
calculateButton.addEventListener("click", async function () {
  let gddAccum = 0; // Accumulated GDD so far

  let plantDate = new Date(directPlantDate.value); // Reformatted planting date

  const centralOffset = plantDate.getTimezoneOffset() / 60; // Adjustment for time zone from default
  plantDate.setHours(plantDate.getHours() + centralOffset);

  let endDate = new Date(plantDate); // New end date
  endDate.setDate(plantDate.getDate() + daysSincePlanting);

  let date = new Date(plantDate); // Placeholder date for calculation

  // Loops through PAST dates
  while (date <= endDate) {
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
async function getTempData(date) {
  let response = await fetch("Columbia_Temp_Data.json");
  let tempData = await response.json();
  let formattedDate = date.toISOString().split("T")[0];

  let tempEntry = [];
  tempEntry[0] = tempData[formattedDate]?.["HighTemp"];
  tempEntry[1] = tempData[formattedDate]?.["LowTemp"];
  return tempEntry;
}
