const Booking = require("../models/Bookings");

const createBooking = async (req, res) => {
  try {

    const booking = await Booking.create({
      userId: req.body.userId,
      tutorId: req.body.tutorId,
      sessionDate: req.body.sessionDate,
      notes: req.body.notes,
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
      .populate("userId")
      .populate("tutorId");

    res.json(bookings);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const deleteBooking = async (req, res) => {
  try {

    await Booking.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Booking cancelled",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  createBooking,
  getBookings,
  deleteBooking,
};