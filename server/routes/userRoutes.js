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


router.get(
  "/:id",
  getProfile
);

router.put(
  "/profile/:id",
  updateProfile
);

router.put(
  "/settings/:id",
  updateSettings
);

router.delete(
  "/:id",
  deleteAccount
);

module.exports = router;