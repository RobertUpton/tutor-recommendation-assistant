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
const getTutorById =
  async (req, res) => {

    const tutor =
      await Tutor.findById(
        req.params.id
      );

    res.json(tutor);
};