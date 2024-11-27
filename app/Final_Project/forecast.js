import { JSDOM } from 'jsdom';
import { loadConfig } from './configLoader.js'; // Assuming you have a separate config loader module

export async function fetchWeeklyForecast(appContainer) {
    const { meteomatics_api_key: apiKey } = await loadConfig(); // Dynamically load API key
    const endpoint = `https://api.meteomatics.com/forecast`;

    try {
        const response = await fetch(`${endpoint}?key=${apiKey}`);
        const data = await response.json();

        const forecastContainer = appContainer.ownerDocument.createElement('div'); // Use appContainer's ownerDocument
        data.forecast.forEach((day) => {
            const dayDiv = appContainer.ownerDocument.createElement('div');
            dayDiv.textContent = `${day.date}: ${day.condition}, ${day.temperature}°C`;
            forecastContainer.appendChild(dayDiv);
        });

        appContainer.appendChild(forecastContainer);
    } catch (error) {
        console.error('Error fetching forecast:', error);
    }
}

// JSDOM Setup for Node.js testing
if (typeof window === 'undefined') {
    const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="app"></div></body></html>`);
    const document = dom.window.document;
    const appContainer = document.getElementById('app');

    // Test the fetchWeeklyForecast function
    fetchWeeklyForecast(appContainer).then(() => {
        console.log(dom.serialize()); // For debugging the updated DOM structure
    });
}
