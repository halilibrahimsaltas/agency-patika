const express = require('express');
const pageController = require('../controllers/pageControllers.js')
const portfolioController= require('../controllers/portfolioController.js')




const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.get('/portfolio/add', portfolioController.getAddPortfolioPage);



module.exports= router;