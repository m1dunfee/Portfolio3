const express = require("express");
const router = express.Router();

const topicsController = require('../controllers/topicsController');

// default-all
router.get('/topics', topicsController.getTopics)
// by discipline
router.get('/topics/discipline/:discipline', topicsController.getTopicsByDiscipline);
// by skill
router.get('/topics/skill/:skill', topicsController.getTopicsBySkill);
// by Technology
router.get('/topics/technology/:technology', topicsController.getTopicsByTechnology);

module.exports = router;