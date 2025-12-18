require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");

const Student = require("./models/Student");
const schema = require("./graphql/schema");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✔️"))
  .catch(err => console.error(err));

// ✅ Test route (REST)
app.get("/", (req, res) => {
  res.json({ message: "Backend Running 🚀" });
});

// ✅ REST: Register student
app.post("/api/register", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();

    res.json({ message: "Student register successful ✅" });
  } catch (err) {
    res.status(500).json({ message: "Registration failed ❌" });
  }
});

// ✅ REST: Get students
app.get("/api/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// ✅ GRAPHQL (THIS WAS MISSING)
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true, // enables GraphQL UI
  })
);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
  console.log("GraphQL running on http://localhost:5000/graphql");
});
