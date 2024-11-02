import { getCoordinates } from "./latlong_converter";

export function getFutureForecast(city, state)
{
    let coords = await(getCoordinates(city, state));
    let lat = coords.latitude;
    let lon = coords.longitude;

    $.ajax({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/3.0/onecall?lat='+lat+'&lon='+lon+'&exclude=current,minutely,hourly,alerts&units=imperial',
        headers: { 'appid': '6785ce768440fe770c2b2f54dc298527'},
        contentType: 'application/json',
        success: function(result) {
            return result;
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
        
    });
}