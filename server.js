import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("backend is running 🚀");
});

// Start Server
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});