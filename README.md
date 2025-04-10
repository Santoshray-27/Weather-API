# Weather-APP using API

Overview
This is a responsive weather application built with HTML, CSS, and JavaScript that allows users to search for current weather conditions in any city or country. The app fetches data from the WeatherAPI.com service and displays comprehensive weather information including temperature, humidity, wind speed, air quality, and more.

Features
User Interface
Clean, modern design with gradient background

Fully responsive layout that works on mobile and desktop

Intuitive search box with error handling

Loading spinner during API requests

Error messages for invalid locations

Weather Information Display
Current temperature with feels-like temperature

Weather condition with visual icon

Detailed metrics:

Humidity percentage

Wind speed

Atmospheric pressure

Air Quality Index (US EPA standard) with color-coded indicators

Technical Features
Asynchronous API calls using Fetch

Dynamic DOM manipulation

Event listeners for both button click and Enter key

Error handling for API requests

Code Structure
HTML
Container with search box and weather display sections

Semantic structure with proper element nesting

Placeholder content that gets replaced by real data

CSS
Modern styling with flexbox and grid layouts

Responsive design with percentage-based widths

Smooth animations and transitions

Color-coded air quality indicators

Custom loading spinner animation

JavaScript
DOMContentLoaded event listener

API key configuration

Event handlers for search functionality

fetchWeather function to get data from WeatherAPI

displayWeather function to update the UI with weather data

Error handling for API requests

API Integration
The app uses WeatherAPI.com's Current Weather and Air Quality API endpoints:

Base URL: http://api.weatherapi.com/v1/current.json

Required parameters:

key: API key (stored in the code)

q: Location query

aqi: yes (to include air quality data)

Setup Instructions
Get an API Key:

Sign up at WeatherAPI.com

Get your free API key

Replace 31e35cfd842342178c4172007250204 in the JavaScript code with your actual API key

Run the Application:

Simply open the HTML file in a modern web browser

No server required for basic functionality (though note that some browsers may block API requests from local files)

Usage
Enter a city or country name in the search box

Click "Search" or press Enter

View the current weather conditions and air quality

Error Handling
The app handles the following scenarios:

Invalid location names (shows error message)

Network issues (shows error message)

Displays loading state during API requests

Customization
You can easily customize:

Colors by modifying the CSS variables

Layout by adjusting the grid/flex properties

Information displayed by modifying the displayWeather function

Units (Celsius/Fahrenheit) by adjusting the API parameters

Browser Support
The app should work in all modern browsers including:

Chrome

Firefox

Safari

Edge

Limitations
Requires an internet connection to fetch weather data

Free API tier has request limits

Currently only displays temperature in Celsius

Future Improvements
Add 5-day forecast functionality

Implement temperature unit toggle (Celsius/Fahrenheit)

Add geolocation to detect user's current location

Implement local storage to save recent searches

Add more detailed air quality information

Implement weather alerts and notifications

Dependencies
WeatherAPI.com service

Modern browser with ES6 support
