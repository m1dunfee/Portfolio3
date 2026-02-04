const express = require("express");
const router = express.Router();

const collectionController = require("../controllers/collectionController");

// Order matters
router.get("/:collection/meta", collectionController.meta);
router.get("/:collection", collectionController.list);

module.exports = router;
