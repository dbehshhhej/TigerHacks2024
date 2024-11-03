import json

# Define the file paths
input_file = 'pestdata.txt'  # Input text file containing the table
output_file = 'pest_data.json'  # Output JSON file

# Initialize an empty list to hold the data
pest_data = []

# Read and parse the data from the text file
with open(input_file, 'r') as file:
    # Read all lines
    lines = file.readlines()
    
    # Clean up lines by stripping whitespace
    lines = [line.strip() for line in lines if line.strip()]  # Remove empty lines

    # Iterate through the lines in chunks of 5 (each pest entry)
    for i in range(0, len(lines), 5):
        if i + 5 <= len(lines):  # Ensure there are enough lines for a complete entry
            pest = lines[i]  # Pest name
            life_stage = lines[i + 1]  # Life stage
            gdd_range = lines[i + 2]  # GDD range
            degree_day_maps = lines[i + 3]  # Relevant degree day maps
            reference = lines[i + 4]  # Reference

            # Initialize min and max GDD
            min_gdd = None
            max_gdd = None

            # Check if GDD range is in the correct format
            if '-' in gdd_range:
                try:
                    min_gdd, max_gdd = map(int, gdd_range.split('-'))
                except ValueError:
                    print(f"Error parsing GDD range '{gdd_range}' for pest '{pest}'. Skipping entry.")
                    continue  # Skip to the next entry if there's a parsing error
            else:
                # Handle single value GDD ranges
                try:
                    min_gdd = max_gdd = int(gdd_range)
                except ValueError:
                    print(f"Error parsing single GDD value '{gdd_range}' for pest '{pest}'. Skipping entry.")
                    continue  # Skip to the next entry

            # Parse the degree day maps, ignoring invalid values
            try:
                degree_day_maps = list(map(int, filter(lambda x: x.isdigit(), degree_day_maps.split(', '))))
            except ValueError:
                print(f"Error parsing degree day maps '{degree_day_maps}' for pest '{pest}'. Skipping entry.")
                continue  # Skip to the next entry

            # Append the parsed data as a dictionary to the list
            pest_data.append({
                "pest": pest,
                "life_stage": life_stage,
                "gdd_range": {
                    "min_gdd": min_gdd,
                    "max_gdd": max_gdd
                },
                "degree_day_maps": degree_day_maps,
                "reference": reference
            })

# Write the data to a JSON file
with open(output_file, 'w') as json_file:
    json.dump(pest_data, json_file, indent=4)

print(f"Data has been successfully saved to {output_file}")

