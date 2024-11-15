import mongoose from "mongoose";

const PlayerStatsModel = new mongoose.Schema(
  {
    matches: {
      type: Number,
      required: true,
    },
    goals: {
      type: Number,
      required: true,
    },
    assists: {
      type: Number,
      required: true,
    },
    trophies: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const PlayerStats = mongoose.model("PlayerStats", PlayerStatsModel);
export default PlayerStats;
