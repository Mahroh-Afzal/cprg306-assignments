import { loadConfig } from './page.js'; // Ensure the utility function is shared
import { JSDOM } from 'jsdom';
import { styles } from './styles.js'; // Assuming styles.js defines the required styles

// Create a simulated DOM using jsdom for Node.js environment
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
const document = dom.window.document;

// Function to fetch weather news
export async function fetchWeatherNews(appContainer) {
    const { newsdata_api_key: apiKey } = await loadConfig(); // Load API key
    const endpoint = `https://newsdata.io/api/1/news`;

    try {
        const response = await fetch(`${endpoint}?key=${apiKey}&category=weather`);
        const data = await response.json();

        // Create container for news
        const newsContainer = document.createElement('div');
        newsContainer.style.marginTop = '20px'; // Optional: Add some spacing

        // Create a sort button
        const sortButton = document.createElement('button');
        sortButton.textContent = 'Sort by Most Views';
        sortButton.style = `background-color: ${styles.colors.deepOrange}; ${styles.buttons}`;

        // Initialize news list
        let newsList = data.results;

        // Function to render news list
        const renderNews = () => {
            newsContainer.innerHTML = ''; // Clear previous content
            newsList.forEach((news) => {
                const newsDiv = document.createElement('div');
                newsDiv.style.margin = '10px 0'; // Optional: Add spacing between news items
                newsDiv.textContent = `${news.title} - ${news.pubDate}`;
                newsContainer.appendChild(newsDiv);
            });
        };

        // Sort functionality
        sortButton.addEventListener('click', () => {
            newsList.sort((a, b) => b.views - a.views); // Example sorting logic
            renderNews();
        });

        // Append elements to app container
        appContainer.appendChild(sortButton);
        appContainer.appendChild(newsContainer);

        // Initial render of news
        renderNews();
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}
