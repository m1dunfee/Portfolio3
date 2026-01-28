const express = require('express');
const router = express.Router();

//bring in the controllers
const projectController = require('../controllers/projectsController')

// default-all
router.get('/projects', projectController.getProjects);
// by discipline
router.get('/projects/discipline/:discipline', projectController.getProjectsByDiscipline);
// by skill
router.get('/projects/skill/:skill', projectController.getProjectsBySkill);
// by Technology
router.get('/projects/technology/:technology', projectController.getProjectsByTechnology);

module.exports = router;