const mongoose = require("mongoose");

const TutorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  subject: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  bio: {
    type: String,
  },

    experience: {
    type: String,
    },

});

module.exports = mongoose.model("Tutors", TutorSchema);