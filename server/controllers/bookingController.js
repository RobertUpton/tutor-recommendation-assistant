const Booking = require("../models/Bookings");

const createBooking = async (req, res) => {
  try {

    const booking = await Booking.create(req.body);

    res.status(201).json(booking);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const getBookings = async (req, res) => {
  try {

    const bookings = await Booking.find()
      .populate("tutorId")
      .populate("userId");

    res.json(bookings);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const getMyBookings = async (req, res) => {
  try {

    const userId = req.params.userId;

    const bookings = await Booking.find({
      userId,
    })
      .populate("tutorId");

    res.json(bookings);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  createBooking,
  getBookings,
  getMyBookings,
};