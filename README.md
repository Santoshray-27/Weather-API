# Weather-APP using API

## Overview

This is a responsive weather application built using HTML, CSS, and JavaScript. It allows users to search for current weather conditions in any city or country. The application fetches data from the [WeatherAPI.com](https://www.weatherapi.com/) service and displays comprehensive weather information, including temperature, humidity, wind speed, air quality, and more.

## Features

### User Interface

* **Clean, modern design** with a visually appealing gradient background.
* **Fully responsive layout** ensuring optimal viewing on various devices (mobile and desktop).
* **Intuitive search box** with built-in error handling for invalid input.
* **Loading spinner** to indicate ongoing API requests and improve user experience.
* **Clear error messages** displayed when an invalid location is entered.

### Weather Information Display

* **Current temperature** prominently displayed along with the "feels-like" temperature.
* **Weather condition** presented with a descriptive text and a corresponding visual icon.
* **Detailed metrics:**
    * **Humidity percentage** indicating the level of moisture in the air.
    * **Wind speed** showing the current speed of the wind.
    * **Atmospheric pressure** providing information about the surrounding air pressure.
    * **Air Quality Index (AQI)** based on the US EPA standard, with color-coded indicators to easily understand the pollution level.

### Technical Features

* **Asynchronous API calls** using the `Fetch` API for efficient data retrieval without blocking the main thread.
* **Dynamic DOM manipulation** to update the HTML content with fetched weather data in real-time.
* **Event listeners** implemented for both button clicks and pressing the Enter key within the search box to trigger the search functionality.
* **Robust error handling** to gracefully manage potential issues during API requests (e.g., network errors, invalid responses).

### Code Structure

* **HTML (`index.html`)**:
    * A main container to structure the search box and weather display sections.
    * Semantic HTML elements used for better organization and accessibility.
    * Placeholder content that is dynamically replaced with actual weather data fetched from the API.
* **CSS (`style.css`)**:
    * Modern styling achieved using Flexbox and Grid layouts for flexible and responsive design.
    * Percentage-based widths to ensure responsiveness across different screen sizes.
    * Smooth animations and transitions to enhance the user interface.
    * Visually distinct color-coded indicators for the Air Quality Index, making it easy to interpret.
    * A custom loading spinner animation to provide visual feedback during data fetching.
* **JavaScript (`script.js`)**:
    * `DOMContentLoaded` event listener to ensure the script runs after the HTML is fully loaded.
    * Configuration of the API key for secure access to the WeatherAPI service.
    * Event handlers attached to the search button and the input field to initiate the weather data retrieval.
    * `fetchWeather` function responsible for making asynchronous API calls to WeatherAPI.com.
    * `displayWeather` function to dynamically update the HTML elements with the received weather information.
    * Implementation of error handling mechanisms to catch and display errors related to API requests or invalid locations.

### API Integration

The application leverages the following endpoints from the [WeatherAPI.com](https://www.weatherapi.com/) service:

* **Base URL:** `http://api.weatherapi.com/v1/current.json`
* **Required parameters:**
    * `key`: Your unique API key (stored securely within the JavaScript code).
    * `q`: The location query provided by the user (city or country name).
    * `aqi`: Set to `yes` to include air quality data in the API response.

## Setup Instructions

1.  **Get an API Key:**
    * Sign up for a free account at [WeatherAPI.com](https://www.weatherapi.com/).
    * Obtain your unique API key from your account dashboard.
    * **Important:** Replace the placeholder API key `31e35cfd842342178c4172007250204` in the `script.js` file with your actual API key.

2.  **Run the Application:**
    * Simply open the `index.html` file in any modern web browser (Chrome, Firefox, Safari, Edge).
    * **Note:** While a local server is not strictly required for basic functionality, some browsers might have security restrictions that could prevent API requests from local files. If you encounter issues, consider using a simple local development server.

## Usage

1.  Enter the name of a city or country in the provided search box.
2.  Click the "Search" button or press the Enter key on your keyboard.
3.  The application will then display the current weather conditions and air quality information for the specified location.
4.  If an invalid location is entered, an appropriate error message will be shown.
5.  A loading spinner will appear while the application is fetching data from the API.

## Error Handling

The application is designed to handle the following common error scenarios:

* **Invalid location names:** If the user enters a location that is not recognized by the WeatherAPI, a user-friendly error message will be displayed.
* **Network issues:** In case of network connectivity problems preventing the API request from reaching the server, an error message indicating a network issue will be shown.
* **Loading state:** A visual loading spinner provides feedback to the user during the API request process, indicating that the application is working.

## Customization

The appearance and behavior of the weather application can be easily customized by modifying the following aspects:

* **Colors:** Modify the CSS variables defined in `style.css` to change the color scheme of the application.
* **Layout:** Adjust the Flexbox and Grid properties in `style.css` to alter the arrangement of elements on the page.
* **Displayed Information:** Modify the `displayWeather` function in `script.js` to control which weather data points are displayed and how they are presented.
* **Units:** While the current implementation displays temperature in Celsius, you can explore the WeatherAPI documentation to adjust the API parameters to fetch data in Fahrenheit or other units and update the `displayWeather` function accordingly.

## Browser Support

This application is designed to work seamlessly in all modern web browsers that support ES6 JavaScript features and the Fetch API, including:

* Google Chrome
* Mozilla Firefox
* Apple Safari
* Microsoft Edge

## Limitations

* Requires an active internet connection to fetch real-time weather data from the WeatherAPI.
* The free tier of the WeatherAPI.com service has limitations on the number of API requests that can be made within a certain period. Exceeding these limits might result in errors.
* Currently, the application only displays temperature in Celsius.

## Future Improvements

The following are some potential future enhancements for the weather application:

* Implement a **5-day or multi-day weather forecast** to provide users with upcoming weather conditions.
* Add a **temperature unit toggle** (Celsius/Fahrenheit) to allow users to choose their preferred unit.
* Integrate **geolocation** functionality to automatically detect the user's current location and display the weather for their area.
* Implement **local storage** to save recent search queries, improving user convenience.
* Include more **detailed air quality information**, such as individual pollutant levels and health advisories.
* Implement **weather alerts and notifications** for severe weather conditions in the user's searched locations.
* Explore the possibility of adding support for other weather APIs as an alternative or additional data source.
