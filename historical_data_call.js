export function getHistoricalData(lat, lon, unixTC)
{
    console.log(lat);
    console.log(lon);

    // Calculate the 5:30 am and 4:00 pm unix times
    let morningUnixTC = unixTC + 19800000;
    let afternoonUnixTC = unixTC + 57600000;

    // Make the early morning and afternoon API Calls
    let morningCall = makeCall(lat, lon, morningUnixTC);
    let afternoonCall = makeCall(lat, lon, afternoonUnixTC);

    let dayData = {
        'maxTemp' : afternoonCall.data.temp,
        'minTemp' : morningCall.data.temp,
        }

    return dayData;
}

function makeCall(lat, lon, TC){
    $.ajax({
        method: 'GET',
        url: 'https://api.openweathermap.org/data/3.0/onecall/timemachine?lat='+lat+'&lon='+lon+'&dt='+TC+'&units=imperial',
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
