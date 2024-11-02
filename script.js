let plant = document.querySelector("#plant");
let state = document.querySelector("#state");
let city = document.querySelector("#city");
let plantDate = document.querySelector("#plant-date"); // Ideally in ISO format
let emergence = document.querySelector("#emergence");
let calculate = document.querySelector("#calculate-button");

plantDate = new Date(plantDate);
endDate = newDate(plantDate.getDate() + 8); // Projects 8 days in the future

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

let lat = 2389752; // Temp vals, set from function calls
let long = 1492385702;

gddAccum = 0;

document
  .getElementById("calculate_button")
  .addEventListener("click", function () {
    let date = new Date(startDate);
    while (date <= endDate) {
      // Function call here
      highTemp = 234987234;
      lowTemp = 234234;
      gddAccum += calcGDD(highTemp, lowTemp, plant);
      date.setDate(date.getDate() + 1);
    }
    let daysTillEmerge = 0;

    while (gddAccum < emergenceGDD[plant]) {
      highTemp = 3847293; // Temp vals, set from function calls
      lowTemp = 3872432;
      gddAccum += calcGDD(highTemp, lowTemp, plant);
      daysTillEmerge++;
      date.setDate(date.getDate() + 1);
    }

    emergence.textContent = `You have ${daysTillEmerge} days till emergence.`;
  });

function calcGDD(highTemp, lowTemp, plant) {
  return (highTemp + lowTemp) / 2 + baseTemps[plant];
}
