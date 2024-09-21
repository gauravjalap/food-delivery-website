import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
// app config
const app = express();
const port = 4000;

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API Working...");
});
app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
