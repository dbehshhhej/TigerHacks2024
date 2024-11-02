//function for dropdown button
/*
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
*/


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
function filterFunction() {
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("myDropdown");
    const a = div.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

