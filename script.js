document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '31e35cfd842342178c4172007250204';
    const searchBtn = document.getElementById('search-btn');
    const locationInput = document.getElementById('location-input');
    const weatherInfo = document.getElementById('weather-info');
    const loading = document.getElementById('loading');
    const errorMessage = document.getElementById('error-message');
    
    searchBtn.addEventListener('click', fetchWeather);
    locationInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            fetchWeather();
        }
    });
    
    function fetchWeather() {
        const location = locationInput.value.trim();
        
        if (!location) return;
        
        // Show loading, hide other sections
        loading.style.display = 'block';
        weatherInfo.style.display = 'none';
        errorMessage.style.display = 'none';
        
        fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Location not found');
                }
                return response.json();
            })
            .then(data => {
                displayWeather(data);
                loading.style.display = 'none';
                weatherInfo.style.display = 'block';
            })
            .catch(error => {
                console.error('Error:', error);
                loading.style.display = 'none';
                errorMessage.style.display = 'block';
            });
    }
    
    function displayWeather(data) {
        // Basic info
        document.getElementById('city-name').textContent = data.location.name;
        document.getElementById('country').textContent = `${data.location.region}, ${data.location.country}`;
        document.getElementById('temperature').textContent = `${data.current.temp_c}°C`;
        document.getElementById('condition-text').textContent = data.current.condition.text;
        document.getElementById('weather-icon').src = `https:${data.current.condition.icon}`;
        
        // Details
        document.getElementById('feels-like').textContent = `${data.current.feelslike_c}°C`;
        document.getElementById('humidity').textContent = `${data.current.humidity}%`;
        document.getElementById('wind').textContent = `${data.current.wind_kph} km/h`;
        document.getElementById('pressure').textContent = `${data.current.pressure_mb} hPa`;
        
        // Air Quality
        const aqiLevel = document.getElementById('aqi-level');
        const usEpaIndex = data.current.air_quality['us-epa-index'];
        
        let aqiText = '';
        let aqiClass = '';
        
        switch(usEpaIndex) {
            case 1:
                aqiText = 'Good';
                aqiClass = 'good';
                break;
            case 2:
                aqiText = 'Moderate';
                aqiClass = 'moderate';
                break;
            case 3:
                aqiText = 'Unhealthy for sensitive groups';
                aqiClass = 'moderate';
                break;
            case 4:
            case 5:
            case 6:
                aqiText = 'Unhealthy to Hazardous';
                aqiClass = 'poor';
                break;
            default:
                aqiText = 'No data';
                aqiClass = '';
        }
        
        aqiLevel.textContent = aqiText;
        aqiLevel.className = 'aqi-level ' + aqiClass;
    }
});