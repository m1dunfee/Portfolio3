const express = require("express");
const router = express.Router();

const booksController = require('../controllers/booksController');

// default-all
router.get('/books', booksController.getBooks)
// by discipline
router.get('/books/discipline/:discipline', booksController.getBooksByDiscipline);
// by skill
router.get('/books/skill/:skill', booksController.getBooksBySkill);
// by Technology
router.get('/books/technology/:technology', booksController.getBooksByTechnology);
// by status
router.get('/books/status/:status', booksController.getBooksByStatus);


module.exports = router;