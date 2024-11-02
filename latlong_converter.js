var city = 'Chicago'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/geocoding?city=' + city + '&country=US',
    headers: { 'X-Api-Key': 'tzkrmsOunAxi2FQK9zHySg==tQrRLSukwCF5meZc'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
    
});
var urlBase = "https://api.api-ninjas.com/v1/geocoding?city=Chicago&country=US"
console.log(urlBase);