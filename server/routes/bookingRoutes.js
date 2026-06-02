const express = require("express");
const router = express.Router();

const {
  getBookings,
  createBooking,
  getMyBookings,
} = require("../controllers/bookingController");

router.get("/", getBookings);

router.get(
  "/user/:userId",
  getMyBookings
);

router.post("/", createBooking);

module.exports = router;