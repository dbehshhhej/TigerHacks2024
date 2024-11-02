export function getCoordinates(city, state) {
  return new Promise((resolve, reject) => {
    console.log(city);
    console.log(state);
    $.ajax({
      method: "GET",
      url: `https://api.api-ninjas.com/v1/geocoding?city=${city}&state=${state}&country=US`,
      headers: { "X-Api-Key": "tzkrmsOunAxi2FQK9zHySg==tQrRLSukwCF5meZc" },
      contentType: "application/json",
      success: function (result) {
        resolve(result[0]); // Resolve with the first result (assuming it has latitude and longitude)
      },
      error: function (jqXHR) {
        console.error("Error: ", jqXHR.responseText);
        reject(jqXHR);
      },
    });
  });
}
