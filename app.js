const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 3000;

// Add a simple root route to provide instructions
app.get('/', (req, res) => {
    res.send('Welcome to the Time Stories App. Access the latest stories using: /getTimeStories');
});

app.get('/getTimeStories', async (req, res) => {
    try {
        // Send HTTP GET request to Time.com
        const response = await axios.get('https://time.com');

        // Load HTML content into Cheerio
        const $ = cheerio.load(response.data);

        // Extract latest stories based on the specified class
        const latestStories = $('.latest-stories__item').slice(0, 6);

        // Create a JSON object array with the latest 6 stories
        const storiesList = latestStories.map((index, element) => {
            const title = $(element).find('h3').text().trim();
            const link = $(element).find('a').attr('href');
            return { title, link };
        }).get();

        res.json(storiesList);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

