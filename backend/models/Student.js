const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String
});

module.exports = mongoose.model("Student", StudentSchema);
