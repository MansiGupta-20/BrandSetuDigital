const Apply = require("../models/Apply");

const submitApplication = async (req, res) => {
  const {
    name,
    email,
    phone,
    location,
    experience,
    profile,
    about,
    jobTitle,
  } = req.body;

  // Validate required fields
  if (!name || !email || !phone) {
    return res.status(400).json({ message: "Name, email, and phone are required" });
  }

  // Save resume filename
  const resume = req.file ? req.file.filename : "";

  const application = await Apply.create({
    name,
    email,
    phone,
    location,
    experience,
    profile,
    about,
    jobTitle,
    resume,
  });

  res.status(201).json({ message: "Application submitted successfully", application });
};

const getApplications = async (req, res) => {
  const applications = await Apply.find();
  res.json(applications);
};

module.exports = { submitApplication, getApplications };
