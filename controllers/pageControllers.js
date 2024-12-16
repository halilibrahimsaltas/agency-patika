const Portfolio = require('../models/Portfolio'); // Import the Portfolio model

const getIndexPage = async (req, res) => {
    try {
        const portfolios = await Portfolio.find(); // Fetch portfolios from DB
        res.render('index', { portfolios }); // Pass portfolios to EJS
    } catch (error) {
        console.error('Error fetching portfolios:', error);
        res.status(500).send('Server Error');
    }
};

module.exports = { getIndexPage };