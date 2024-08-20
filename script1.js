document.addEventListener('DOMContentLoaded', () => {
    const statesAndCities = {
        'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur'],
        'Arunachal Pradesh': ['Itanagar', 'Tawang', 'Ziro'],
        'Assam': ['Guwahati', 'Dibrugarh', 'Jorhat'],
        'Bihar': ['Patna', 'Gaya', 'Bhagalpur'],
        'Chhattisgarh': ['Raipur', 'Bilaspur', 'Durg'],
        'Goa': ['Panaji', 'Margao', 'Vasco da Gama'],
        'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara'],
        'Haryana': ['Chandigarh', 'Gurgaon', 'Faridabad'],
        'Himachal Pradesh': ['Shimla', 'Manali', 'Dharamshala'],
        'Jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad'],
        'Karnataka': ['Bengaluru', 'Mysore', 'Mangalore'],
        'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode'],
        'Madhya Pradesh': ['Bhopal', 'Indore', 'Gwalior'],
        'Maharashtra': ['Mumbai', 'Pune', 'Nagpur'],
        'Manipur': ['Imphal', 'Churachandpur', 'Thoubal'],
        'Meghalaya': ['Shillong', 'Tura', 'Nongpoh'],
        'Mizoram': ['Aizawl', 'Lunglei', 'Champhai'],
        'Nagaland': ['Kohima', 'Dimapur', 'Mokokchung'],
        'Odisha': ['Bhubaneswar', 'Cuttack', 'Rourkela'],
        'Punjab': ['Chandigarh', 'Ludhiana', 'Amritsar'],
        'Rajasthan': ['Jaipur', 'Udaipur', 'Jodhpur'],
        'Sikkim': ['Gangtok', 'Pelling', 'Lachung'],
        'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai'],
        'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad'],
        'Tripura': ['Agartala', 'Udaipur', 'Kailashahar'],
        'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Agra'],
        'Uttarakhand': ['Dehradun', 'Haridwar', 'Nainital'],
        'West Bengal': ['Kolkata', 'Darjeeling', 'Siliguri']
    };

    const stateListContainer = document.getElementById('state-list');

    Object.keys(statesAndCities).forEach(state => {
        const stateDiv = document.createElement('div');
        stateDiv.className = 'state';
        
        const stateLink = document.createElement('a');
        stateLink.className = 'state-link';
        stateLink.textContent = state;
        stateLink.href = `#${state.replace(/\s/g, '-')}`; // Creating a URL for new page
        stateLink.target = '_blank'; // Open in new tab

        stateLink.addEventListener('click', (event) => {
            event.preventDefault();
            showCities(stateDiv, state);
        });

        stateDiv.appendChild(stateLink);
        stateListContainer.appendChild(stateDiv);
    });

    function showCities(stateDiv, state) {
        const existingCityList = stateDiv.querySelector('.city-list');
        if (existingCityList) {
            existingCityList.remove();
        } else {
            const cityListContainer = document.createElement('div');
            cityListContainer.className = 'city-list';
            const cities = statesAndCities[state];
            const cityList = document.createElement('ul');
            cities.forEach(city => {
                const cityItem = document.createElement('li');
                cityItem.textContent = city;
                cityList.appendChild(cityItem);
            });
            cityListContainer.appendChild(cityList);
            stateDiv.appendChild(cityListContainer);
        }
    }
});
