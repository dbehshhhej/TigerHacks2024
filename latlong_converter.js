function generate()
{
    var city = document.getElementById("cityInput").value;
    var state = document.getElementById("stateInput").value;
    console.log(city);
    console.log(state);
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/geocoding?city=' + city + '&state=' + state + '&country=US',
        headers: { 'X-Api-Key': 'tzkrmsOunAxi2FQK9zHySg==tQrRLSukwCF5meZc'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
        
    });
}

