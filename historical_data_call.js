export async function getHistoricalData(lat, lon, unixTC)
{
    //console.log(lat);
    //console.log(lon);
    let morningUnixTC = unixTC + 19800; // 5:30 AM
    let afternoonUnixTC = unixTC + 57600; // 4:00 PM

    try {
        // Make the early morning and afternoon API Calls
        let morningCall = await makeCall(lat, lon, morningUnixTC);
        let afternoonCall = await makeCall(lat, lon, afternoonUnixTC);

        let dayData = {
            'maxTemp': afternoonCall.data.temp,
            'minTemp': morningCall.data.temp,
        };

        return dayData;
    } catch (error) {
        console.error('Error fetching historical data:', error);
    console.error('Full error details:', error.responseText || error);
    throw error; // Re-throw the error for further handling if needed
    }
}

function makeCall(lat, lon, TC) {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'GET',
            url: `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${TC}&units=imperial&appid=6785ce768440fe770c2b2f54dc298527`,
            contentType: 'application/json',
            success: function(result) {
                resolve(result);
            },
            error: function(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
                reject(jqXHR);
            }
        });
    });
}