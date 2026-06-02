const express = require("express");

const router = express.Router();

const {
  getProfile,
  updateProfile,
  updateSettings,
  deleteAccount,
} = require("../controllers/userController");
router.get("/:id", getProfile);

router.put("/:id", updateProfile);

module.exports = router;

router.put(
  "/settings/:id",
  updateSettings
);

router.delete(
  "/:id",
  deleteAccount
);