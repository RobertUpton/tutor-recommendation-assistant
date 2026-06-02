require("dotenv").config();

// Imports required packages, connections, & routes
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const tutorRoutes = require("./routes/tutorRoutes");
const Tutor = require("./models/Tutors");
const bookingRoutes = require("./routes/bookingRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

// Connect to MongoDB database
connectDB();


app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tutors", tutorRoutes);
app.use("/api/bookings", bookingRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("TutorMatch API Running");
});

// Temporary route to add a tutor
app.get("/test-tutor", async (req, res) => {
  try {
    const tutor = await Tutor.create({
      name: "John Smith",
      subject: "Mathematics",
      price: 25,
      bio: "Experienced math tutor",
    });

    res.json(tutor);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


app.get("/seed-tutors", async (req, res) => {

  await Tutor.insertMany([
    {
      name: "Sarah Johnson",
      subject: "Mathematics",
      price: 25,
      bio: "Helping students master algebra and calculus.",
    },

    {
      name: "David Lee",
      subject: "Physics",
      price: 30,
      bio: "SAT and college physics specialist.",
    },

    {
      name: "Emily Carter",
      subject: "Programming",
      price: 35,
      bio: "Frontend and JavaScript tutor.",
    },

    {
      name: "Michael Brown",
      subject: "Chemistry",
      price: 28,
      bio: "Making chemistry easy to understand.",
    },

    {
      name: "Jessica Wilson",
      subject: "English",
      price: 22,
      bio: "Essay writing and grammar expert.",
    }
  ]);

  res.send("Tutors added!");
});




// Port number the server will run on
const PORT = 5000;

const User = require("./models/Users");

app.get("/api/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});