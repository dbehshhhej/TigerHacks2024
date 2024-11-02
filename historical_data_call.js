export function getHistoricalData(lat, lon, unixTC)
{
    console.log(lat);
    console.log(lon);
    $.ajax({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/3.0/onecall/timemachine?lat='+lat+'&lon='+lon+'&dt='+unixTC+'&units=imperial',
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