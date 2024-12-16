const Portfolio = require('../models/Portfolio');


exports.getAllPortfolios = async (req, res) => {
    try {
        const portfolios = await Portfolio.find();
        res.render('index', { portfolios });
    } catch (err) {
        res.status(500).send('Server error while fetching portfolios.');
    }
};


exports.getAddPortfolioPage = (req, res) => {
    res.render('add'); 
};
exports.addPortfolio = async (req, res) => {
    try {
        const { title, description } = req.body;

        // Handle image upload
        let imageUrl = '';
        if (req.files && req.files.image) {
            const image = req.files.image;
            const uploadPath = `public/uploads/${image.name}`;
            await image.mv(uploadPath); // Save the file
            imageUrl = `/uploads/${image.name}`;
        }

        // Save portfolio to the database
        await Portfolio.create({
            title,
            description,
            imageUrl,
        });

        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error while adding portfolio.');
    }
};
exports.addPortfolio = async (req, res) => {
    try {
        const { title, description, image } = req.body;
        await Portfolio.create({ title, description, image });
        res.redirect('/portfolio');
    } catch (err) {
        res.status(500).send('Server error while adding portfolio.');
    }
};


exports.deletePortfolio = async (req, res) => {
    try {
        const { id } = req.params;
        await Portfolio.findByIdAndDelete(id);
        res.redirect('/portfolio');
    } catch (err) {
        res.status(500).send('Server error while deleting portfolio.');
    }
};