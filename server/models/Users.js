const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    default: "",
  },

  location: {
    type: String,
    default: "",
  },

  educationLevel: {
    type: String,
    default: "",
  },

  favoriteSubject: {
    type: String,
    default: "",
  },

  bio: {
    type: String,
    default: "",
  },

},
{
  timestamps: true,
}
);

module.exports = mongoose.model(
  "User",
  UserSchema
);