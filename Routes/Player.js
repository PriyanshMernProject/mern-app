import express from "express";
import {
  AllPlayers,
  FindPlayer,
  newPlayer,
  playerStats,
  updatePlayer,
  updateWholePlayer,
  deletePlayer,
} from "../Controllers/Player.js";
const router = express.Router();
router.post("/newPlayer", newPlayer);
router.post("/stats", playerStats);
router.get("/players", AllPlayers);
router.get("/singlePlayer/:id", FindPlayer);
router.patch("/updatePlayer/:id", updatePlayer);
router.put("/updateWholePlayer/:id", updateWholePlayer);
router.delete("/deletePlayer/:id", deletePlayer);

export default router;
