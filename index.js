import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import request from "supertest";

import PlayerRoute from "./Routes/Player.js";

dotenv.config();
const PORT = process.env.PORT || 3001;
export const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/players", PlayerRoute);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB in disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default {};
