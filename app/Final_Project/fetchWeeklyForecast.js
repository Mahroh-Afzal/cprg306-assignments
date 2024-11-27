import { loadConfig } from './config.js'; // Assuming loadConfig is in a separate file

// Update fetchWeeklyForecast to accept appContainer and work with jsdom
export async function fetchWeeklyForecast(appContainer) {
    // Dynamically load the API key
    const { meteomatics_api_key: apiKey } = await loadConfig();
    const endpoint = `https://api.meteomatics.com/forecast`;

    try {
        // Fetch forecast data from API
        const response = await fetch(`${endpoint}?key=${apiKey}`);
        const data = await response.json();

        // Create a container for the forecast results
        const forecastContainer = document.createElement('div');
        
        // Append the forecast details to the container
        data.forecast.forEach((day) => {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = `${day.date}: ${day.condition}, ${day.temperature}°C`;
            forecastContainer.appendChild(dayDiv);
        });

        // Append the forecast container to the app container
        appContainer.appendChild(forecastContainer);
    } catch (error) {
        console.error('Error fetching forecast:', error);
    }
}
