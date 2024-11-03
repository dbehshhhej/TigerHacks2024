export function projectDaysRemaining(
  forecastJSON,
  city,
  remainingDegrees,
  GDDBase
) {
  // Ensure city exists in data
  if (!forecastJSON[city]) {
    console.error("City data not found");
    return null;
  }

  // Calculate GDD for each day and store in array
  let dailyGDDs = [];
  let i = 0;
  for (const date in forecastJSON[city]) {
    let minTemp = forecastJSON[city][date].LowTemp;
    let maxTemp = forecastJSON[city][date].HighTemp;
    let GDDCalculated = (minTemp + maxTemp) / 2 - GDDBase;
    dailyGDDs[i] = GDDCalculated;
    i++;
  }

  // Calculate daily change in GDDs
  let changeInGDDDaily = 0;
  for (let j = 1; j <= 7; j++) {
    changeInGDDDaily += dailyGDDs[j] - dailyGDDs[j - 1];
  }
  changeInGDDDaily /= 8;

  if (changeInGDDDaily <= 0) {
    return null;
  }

  // Count days required to reach remaining degrees
  let daysRemaining = 0;
  for (const dailyDegrees of dailyGDDs) {
    if (remainingDegrees > 0) {
      remainingDegrees -= dailyDegrees;
      daysRemaining++;
    } else {
      return daysRemaining;
    }
  }

  // Project forward if remaining degrees not reached
  let nextDay = dailyGDDs[7] + changeInGDDDaily;
  while (remainingDegrees > 0) {
    remainingDegrees -= nextDay;
    nextDay += changeInGDDDaily;
    daysRemaining++;
  }

  return daysRemaining;
}
