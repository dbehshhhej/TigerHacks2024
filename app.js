//function for dropdown button
function toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function selectCity(city) {
    document.getElementById("selectCity").value = city;
    toggleDropdown();
}

window.onclick = function(event) {
    const dropdown = document.getElementById("dropdown");
    if (!event.target.matches('.dropdownbutton')) {
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
}