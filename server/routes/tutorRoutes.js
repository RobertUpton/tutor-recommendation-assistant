const express = require("express");
const router = express.Router();

const {
  getTutors,
} = require("../controllers/tutorController");

router.get("/", getTutors);

module.exports = router;