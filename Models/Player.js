import mongoose, { model, Types } from "mongoose";

const PlayerModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    jersy: {
      type: Number,
      required: true,
    },
    club: {
      type: String,
      required: true,
      min: 5,
      max: 30,
    },
    country: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    stats: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PlayerStats",
    },
  },
  { timestamps: true }
);

const Player = mongoose.model("Player", PlayerModel);
export default Player;
