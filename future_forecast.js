export function getFutureForecast(lat, lon)
{
    console.log(lat);
    console.log(lon);
    $.ajax({
        method: 'GET',
        headers: { 'appid': '6785ce768440fe770c2b2f54dc298527'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
        
    });
}
