const Booking = require("../models/Bookings");

const createBooking = async (req, res) => {
  try {

    const {
      userId,
      tutorId,
      sessionDate,
      notes,
    } = req.body;

    const booking = await Booking.create({
      userId,
      tutorId,
      sessionDate,
      notes,
    });

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

module.exports = {
  getBookings,
  createBooking,
};