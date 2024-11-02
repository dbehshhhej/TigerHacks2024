//function for dropdown button
const mainDropdown = document.getElementById('mainDropdown');
        const stateDropdown = document.getElementById('stateDropdown');
        const cityDropdown = document.getElementById('cityDropdown');
        
        const cities = {
            'MO': ['Columbia'],
            'KS': ['Manhattan'],
            'IA': ['Des Moines']
        };

        function handleMainDropdown() {
            const selectedOption = mainDropdown.value;
            
            if (selectedOption === 'state') {

                stateDropdown.classList.remove('hidden');

                cityDropdown.classList.add('hidden');

            } else if (selectedOption === 'city') {

                stateDropdown.classList.remove('hidden');

                cityDropdown.classList.remove('hidden');

            } else {

                stateDropdown.classList.add('hidden');

                cityDropdown.classList.add('hidden');
            }
        }

        function handleStateChange() {

            const selectedState = stateDropdown.value;

            cityDropdown.innerHTML = '<option value="">Select a City</option>';

            if (selectedState && cities[selectedState]) {
                
                cities[selectedState].forEach(city => {

                    const option = document.createElement('option');

                    option.value = city;

                    option.textContent = city;

                    cityDropdown.appendChild(option);

                });

                cityDropdown.classList.remove('hidden');

            } else {
                
                cityDropdown.classList.add('hidden');
            }
        }
    