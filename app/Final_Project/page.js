import { styles } from './styles.js';
import { fetchWeeklyForecast } from './forecast.js';
import { fetchWeatherNews } from './news.js';
import { JSDOM } from 'jsdom';

// Create a simulated DOM using jsdom
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
const document = dom.window.document;

// Create app container
const appContainer = document.createElement('div');
appContainer.id = 'app';
document.body.appendChild(appContainer);

// Function to render the home page
const renderHomePage = () => {
    appContainer.innerHTML = ''; // Clear previous content

    const forecastButton = createButton('Weekly Forecast', renderForecastPage); // Pass render function
    const newsButton = createButton('Weather News', renderNewsPage); // Pass render function
    const contactButton = createButton('Contact Us', renderContactPage); // Pass render function

    appContainer.appendChild(forecastButton);
    appContainer.appendChild(newsButton);
    appContainer.appendChild(contactButton);
};

// Function to render the forecast page
const renderForecastPage = async () => {
    appContainer.innerHTML = '<h1>Weekly Forecast</h1>';
    // Call fetchWeeklyForecast() to populate the page
    await fetchWeeklyForecast(appContainer);
};

// Function to render the news page
const renderNewsPage = async () => {
    appContainer.innerHTML = '<h1>Weather News</h1>';
    // Call fetchWeatherNews() to populate the page
    await fetchWeatherNews(appContainer);
};

// Function to render the contact page
const renderContactPage = () => {
    appContainer.innerHTML = `
        <h1>Contact Us</h1>
        <form id="contactForm">
            <input type="text" id="name" placeholder="Your Name" required />
            <input type="email" id="email" placeholder="Your Email" required />
            <textarea id="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
        </form>
        <div id="formFeedback"></div>
    `;

    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (name && email && message) {
            document.getElementById('formFeedback').textContent = 'Message has been sent.';
            form.reset();
        } else {
            document.getElementById('formFeedback').textContent = 'All fields are required.';
        }
    });
};

// Function to create a button
const createButton = (text, renderFunction) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.style.backgroundColor = styles.colors.deepOrange;
    button.style = `${styles.buttons}`;
    button.addEventListener('click', renderFunction); // Call the rendering function directly
    return button;
};

// Configuration loader with caching
let config;
const loadConfig = async () => {
    if (!config) {
        const response = await fetch('./config.json');
        config = await response.json();
    }
    return config;
};

// Update fetchWeeklyForecast to use appContainer and jsdom

    const { meteomatics_api_key: apiKey } = await loadConfig();
    const endpoint = `https://api.meteomatics.com/forecast`;

    try {
        const response = await fetch(`${endpoint}?key=${apiKey}`);
        const data = await response.json();

        const forecastContainer = document.createElement('div');
        data.forecast.forEach((day) => {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = `${day.date}: ${day.condition}, ${day.temperature}°C`;
            forecastContainer.appendChild(dayDiv);
        });

        appContainer.appendChild(forecastContainer);
    } catch (error) {
        console.error('Error fetching forecast:', error);
    }

// Render the initial home page
renderHomePage();

// Log the resulting DOM (optional for debugging)
console.log(dom.serialize());
