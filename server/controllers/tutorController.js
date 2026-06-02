const Tutor = require("../models/Tutors");

const getTutors = async (req, res) => {
  try {
    const tutors = await Tutor.find();

    res.json(tutors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getTutors,
};