const express = require('express');
const router = express.Router();

// bring in controllers
const indexController = require('../controllers/indexController');

// health check
router
    .route('/health')
    .get(indexController.health);

// db check
router
    .route('/dbtest')
    .get(indexController.dbtest);

module.exports = router;