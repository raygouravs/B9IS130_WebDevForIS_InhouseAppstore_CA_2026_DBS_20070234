import express from "express";
import cors from "cors";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Test Route
app.get('/', (req, res) => {
  res.send('API is running...');
});


export default app;
