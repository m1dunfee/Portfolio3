const express = require("express");
const router = express.Router();

const prospectsController = require('../controllers/prospectsController');

// default-all
router.get('/prospects', prospectsController.getProspects)
// by discipline
router.get('/prospects/discipline/:discipline', prospectsController.getProspectsByDiscipline);
// by skill
router.get('/prospects/skill/:skill', prospectsController.getProspectsBySkill);
// by Technology
router.get('/prospects/technology/:technology', prospectsController.getProspectsByTechnology);

module.exports = router;