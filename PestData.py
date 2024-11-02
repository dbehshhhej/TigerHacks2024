import json
import requests  # for making API calls

# Make the API request
response = requests.get('https://www.canr.msu.edu/ipm/agriculture/christmas_trees/gdd_of_landscape_insects')
data = response.json()

# Save to JSON file
with open('output.json', 'w') as f:
    json.dump(data, f, indent=4)  # indent=4 makes it human-readable
