export function projectDaysRemaining(forecastJSON, remainingDegrees, GDDBase)
{

    // Calculate GDD for each day, append it to an array
    let dailyGDDs = [];
    let i = 0;
    for (const day of forecastJSON.data.daily) {
        let minTemp = day.temp.min;
        let maxTemp = day.temp.max;

        let GDDCalculated = ((minTemp+maxTemp)/2)-GDDBase;
        dailyGDDs[i] = GDDCalculated;
        i++
    }    

    // Using the dailyGDDs, estimate change in gdd per day
    let changeInGDDDaily = ((dailyGDDs[1]-dailyGDDs[0]) + (dailyGDDs[2]-dailyGDDs[1]) + (dailyGDDs[3]-dailyGDDs[2]) + (dailyGDDs[4]-dailyGDDs[3]) + (dailyGDDs[5]-dailyGDDs[4]) + (dailyGDDs[6]-dailyGDDs[5]) + (dailyGDDs[7]-dailyGDDs[6])) / 8;
    let daysRemaining = 0;

    // Count the days GDDs towards the remaining degress, will return if the remaining degrees reaches 0 within the 8 days, otherwise will continue beyond.
    for(const dailyDegrees of dailyGDDs){
        if(remainingDegrees >= 0){
            remainingDegrees -= dailyDegrees;
            daysRemaining++;
        } else {
            return daysRemaining;
        }
    }


    // Project it forward beyond the 8 days
    let startingPointGDD = dailyGDDs[7];
    let nextDay = startingPointGDD + changeInGDDDaily;

    while(theoreticalRemaining >= 0){
        remainingDegrees -= nextDay;
        nextDay += changeInGDDDaily;
        daysRemaining++;
    }
    return daysRemaining;

}