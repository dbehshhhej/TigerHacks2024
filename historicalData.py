import requests
import pandas as pd
from datetime import datetime, timedelta

API_KEY = '6785ce768440fe770c2b2f54dc298527'

cities = [
    {"name": "Manhattan, KS", "lat": 39.1836, "lon": -96.5717},
    {"name": "Columbia, MO", "lat": 38.9517, "lon": -92.3341},
    {"name": "Des Moines, IA", "lat": 41.5868, "lon": -93.6250}
]

start_date = datetime(2024, 4, 1)
end_date = datetime(2024,4,5)

# Returns an array of dates between two points
def dates_range(start, end):
    dates = []
    current = start
    while current <= end:
        dates.append(current)
        current += timedelta(days=1)
    return dates
    
# Function to fetch weather data for a city
def fetch_weather_data(city, date):
    timestamp = int(date.timestamp())
    url = f'https://api.openweathermap.org/data/3.0/onecall?lat={city["lat"]}&lon={city["lon"]}&exclude=current,minutely,hourly,alerts&appid={API_KEY}&units=metric'
    response = requests.get(url)
    data = response.json()

    # Extract max and mean temperatures
    max_temp = data["daily"][0]["temp"]["max"]
    min_temp = data["daily"][0]["temp"]["min"] 
    return max_temp, min_temp

# Generates weather data for all cities as a csv
def generate_weather_data():
    all_data = []
    dates = dates_range(start_date, end_date)

    for city in cities:
        for date in dates:
            try:
                max_temp, min_temp = fetch_weather_data(city, date)
                all_data.append({
                    "City": city["name"],
                    "Date": date.strftime('%Y-%m-%d'),
                    "Max Temperature (C)": max_temp,
                    "Min Temperature (C)": min_temp
                })
            except Exception as e:
                print(f"Error fetching data for {city['name']} on {date}: {e}")

    # Convert to DataFrame for easier handling
    df = pd.DataFrame(all_data)
    return df

# Generate the data and save to CSV
df = generate_weather_data()
df.to_csv("historical_weather_data.csv", index=False)
print("Data saved to historical_weather_data.csv")
    