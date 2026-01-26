const express = require('express');
const router = express.Router();

//bring in the controllers
const projectController = require('../controllers/projectController')

router
    .route('/projects')
    .get(projectController.getProjects);

module.exports = router;