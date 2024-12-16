const express = require("express");
const router = express.Router();
const portfolioController = require("../controllers/portfolioController");

// Route to list all portfolios
router.get("/", portfolioController.getAllPortfolios);

// Route to show add portfolio page
router.get("/add", portfolioController.getAddPortfolioPage);

//  Route to handle portfolio creation
router.post("/add", portfolioController.addPortfolio);

router.post('/portfolio', portfolioController.addPortfolio);

//  Route to handle portfolio deletion
router.post("/delete/:id", portfolioController.deletePortfolio);

router.get('/portfolio/add', portfolioController.getAddPortfolioPage);

module.exports = router;