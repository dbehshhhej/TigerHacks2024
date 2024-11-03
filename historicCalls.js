import { getCoordinates } from "./latlong_converter.js";
import { getHistoricalData } from "./historical_data_call.js";

export async function saveHistoricalData(
  cityName,
  state,
  plantDateRaw,
  currentDateRaw
) {
  try {
    // Wait for coordinates to be fetched
    var data = await getCoordinates(cityName, state);
    console.log(data, cityName, state);
    const latitude = data.latitude;
    const longitude = data.longitude;
    var plantDate = new Date(plantDateRaw);
    var plantDateUnix = plantDate.getTime();
    plantDateUnix = toMidnightUnix(plantDateUnix);
    var currentDate = new Date(currentDateRaw);
    var currentDateUnix = currentDate.getTime();

    // let data2 = {
    //   cities: {
    //     [cityName]: {
    //       lat: latitude,
    //       lon: longitude,
    //       dates: {
    //         [plantDateUnix]: {
    //           maxTemp: 20,
    //           minTemp: 10,
    //         },
    //         [plantDateUnix + 86400]: {
    //           maxTemp: 22,
    //           minTemp: 12,
    //         },
    //       },
    //     },
    // },
    // };

    // Define a new object dates that will have a lot of temperature data for each day appended to it.
    let dates = {};
    for (let day = plantDateUnix; day < currentDateUnix; day += 86400) {
      console.log(day);
      // Make a call to get data, if needed
      var temps = await getHistoricalData(latitude, longitude, day);
      dates[day] = temps;
      console.log(temps);
    }

    return dates;
  } catch (error) {
    console.error("Error fetching coordinates:", error);
  }
}

function toMidnightUnix(unixTimestamp) {
  //This was a function directly from chatGPT
  // Create a Date object from the Unix timestamp
  const date = new Date(unixTimestamp);

  // Set the time to midnight (00:00:00.000)
  date.setHours(0, 0, 0, 0);

  // Return the Unix timestamp for midnight
  return Math.floor(date.getTime() / 1000); // Convert to seconds
}
