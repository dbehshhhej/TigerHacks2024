document.addEventListener("DOMContentLoaded", function () {
  const stateSelect = document.querySelector("#state");
  const citySelect = document.querySelector("#city");

  // Define cities for each state
  const stateCities = {
    KS: ["Manhattan", "Topeka", "Wichita"],
    IA: ["Des Moines", "Cedar Rapids", "Iowa City"],
    MO: ["Columbia", "Kansas City", "St. Louis"],
  };

  // Function to update cities based on selected state
  function updateCities() {
    const selectedState = stateSelect.value;
    const cities = stateCities[selectedState] || [];

    // Clear current city options
    citySelect.innerHTML = "";

    // Populate city dropdown with new options
    cities.forEach((city) => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }

  // Initial call to populate cities based on the default state
  updateCities();

  // Event listener to update cities when state changes
  stateSelect.addEventListener("change", updateCities);
});

document.getElementById("next-button").addEventListener("click", goNext());

function goNext(){
    document.querySelector(".crop-info").display = block;
    document.querySelector("#next-button").display = none;
}