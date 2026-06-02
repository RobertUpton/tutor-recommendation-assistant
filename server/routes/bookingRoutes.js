const express = require("express");
const router = express.Router();

const {
  getBookings,
  createBooking,
} = require("../controllers/bookingController");


// GET all bookings
router.get("/", getBookings);

// CREATE booking
router.post("/", createBooking);

module.exports = router;