import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

// Register Student
router.post("/register", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();

    res.status(201).json({
      message: "Student Registered Successfully ✔️",
      student
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Students
router.get("/students", async (req, res) => {
  const all = await Student.find();
  res.json(all);
});

// For future: Get, Update, Delete by ID
// router.get("/:id", ...
// router.put("/:id"...)
// router.delete("/:id" ...)

export default router;
