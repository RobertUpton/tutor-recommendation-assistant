const Booking = require("../models/Bookings");
const Tutor = require("../models/Tutors");

const getDashboardStats = async (req, res) => {
  try {

    const upcomingSessions = await Booking.countDocuments();

    const savedTutors = await Tutor.countDocuments();

    const completedSessions = 0;

    res.json({
      upcomingSessions,
      savedTutors,
      completedSessions,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  getDashboardStats,
};