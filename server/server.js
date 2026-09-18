const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Nurse = require("./models/Nurse");
const CareRequest = require("./models/CareRequest");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Nurses Connect API is running",
  });
});

// =========================
// NURSE API
// =========================

// GET all nurses
app.get("/api/nurses", async (req, res) => {
  try {
    const nurses = await Nurse.find();

    res.json(nurses);
  } catch (error) {
    console.error("Failed to fetch nurses:", error.message);

    res.status(500).json({
      message: "Failed to fetch nurses",
    });
  }
});

// POST a new nurse
app.post("/api/nurses", async (req, res) => {
  try {
    const nurse = new Nurse(req.body);

    const savedNurse = await nurse.save();

    res.status(201).json(savedNurse);
  } catch (error) {
    console.error("Failed to create nurse:", error.message);

    res.status(400).json({
      message: "Failed to create nurse",
    });
  }
});

// =========================
// CARE REQUEST API
// =========================

// GET all care requests
app.get("/api/care-requests", async (req, res) => {
  try {
    const requests = await CareRequest.find().sort({
      createdAt: -1,
    });

    res.json(requests);
  } catch (error) {
    console.error(
      "Failed to fetch care requests:",
      error.message,
    );

    res.status(500).json({
      message: "Failed to fetch care requests",
    });
  }
});

// POST a new care request
app.post("/api/care-requests", async (req, res) => {
  try {
    const request = new CareRequest(req.body);

    const savedRequest = await request.save();

    res.status(201).json(savedRequest);
  } catch (error) {
    console.error(
      "Failed to create care request:",
      error.message,
    );

    res.status(400).json({
      message: "Failed to create care request",
    });
  }
});

// =========================
// MONGODB CONNECTION
// =========================

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(
        `Server running on http://localhost:${PORT}`,
      );
    });
  })
  .catch((error) => {
    console.error(
      "MongoDB connection failed:",
      error.message,
    );
  });