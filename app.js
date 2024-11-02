//function for dropdown button
function toggleDropdown() {

    const dropdown = document.getElementById("dropdown");

    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function selectCity(city) {

    document.getElementById("selectCityDisplay").textContent = "Selected City: " + city;

    toggleDropdown();
}

window.onclick = function(event) {

    const dropdown = document.getElementById("citylist");

    const button = document.querySelector(".dropdown-button");

    if (!event.target.matches('.dropdownbutton')) {

        if (!button.contains(event.target) && dropdown.style.display === "block") {
            
            dropdown.style.display = "none";
        }
    }
}