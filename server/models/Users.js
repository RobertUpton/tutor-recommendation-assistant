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

  education: {
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

  notifications: {
    type: Boolean,
    default: true,
  },

  darkMode: {
    type: Boolean,
    default: true,
  },
},
{
  timestamps: true,
});

module.exports = mongoose.model(
  "User",
  UserSchema
);