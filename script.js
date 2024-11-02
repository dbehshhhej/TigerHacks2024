let plant = document.querySelector("#plant");
let state = document.querySelector("#state");
let city = document.querySelector("#city");
let directPlantDate = document.querySelector("#plant-date"); // Ideally in ISO format
let emergence = document.querySelector("#emergence");
let calculateButton = document.querySelector("#calculate-button");

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

gddAccum = 0;

calculateButton.addEventListener("click", function () {
  let plantDate = new Date(directPlantDate.value);
  let endDate = new Date(plantDate);
  endDate.setDate(plantDate.getDate() + 8);

  let date = new Date(startDate);
  while (date <= endDate) {
    let tempEntry = getTempData(date);
    if (tempEntry) {
      // Check if tempEntry is not null
      let highTemp = tempEntry.high;
      let lowTemp = tempEntry.low;
    }
    gddAccum += calcGDD(highTemp, lowTemp, plant.value);
    date.setDate(date.getDate() + 1);
  }
  let daysTillEmerge = 0;

  while (gddAccum < emergenceGDD[plant]) {
    let tempEntry = getTempData(date);
    if (tempEntry) {
      // Check if tempEntry is not null
      let highTemp = tempEntry.high;
      let lowTemp = tempEntry.low;
    }
    gddAccum += calcGDD(highTemp, lowTemp, plant.value);
    daysTillEmerge++;
    date.setDate(date.getDate() + 1);
  }

  emergence.textContent = `You have ${daysTillEmerge} days till emergence.`;
});

function calcGDD(highTemp, lowTemp, plant) {
  return (highTemp + lowTemp) / 2 + baseTemps[plant];
}

const tempData = JSON.parse(localStorage.getItem("Columbia_Temp_Data.json"));

function getTempData(date) {
  let formattedDate = date.toISOString().split("T")[0];
  let tempEntry = tempData[formattedDate];
  return { high: tempEntry.HighTemp, low: tempEntry.LowTemp };
}
