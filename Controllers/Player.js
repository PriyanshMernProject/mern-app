import mongoose from "mongoose";
import PlayerStats from "../Models/PlayerStats.js";
import Player from "../Models/Player.js";
export const newPlayer = async (req, res) => {
  try {
    const { name, jersy, club, country, stats } = req.body;
    const newPlayer = new Player({
      name,
      jersy,
      club,
      country,
      stats,
    });
    const savedPlayer = await newPlayer.save();
    console.log(savedPlayer);
    res.status(201).json({ data: savedPlayer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const playerStats = async (req, res) => {
  try {
    const { matches, goals, assists, trophies } = req.body;
    const newStat = new PlayerStats({
      matches,
      goals,
      assists,
      trophies,
    });
    const saveStats = await newStat.save();
    console.log(saveStats);
    res.status(201).json({ message: "Data has been created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const AllPlayers = async (req, res) => {
  try {
    const players = await Player.find({});
    console.log(players);
    res.status(200).json({ data: players });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const combinedData = async (req, res) => {
  try {
    const data = await Player.aggregate([
      {
        $lookup: {
          from: "PlayerStsts",
          localField: "_id",
          foreignField: "stats",
          as: "res",
        },
      },
    ]);
    console.log(data);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const FindPlayer = async (req, res) => {
  try {
    const { id } = req.params;
    //const player = await Player.findById(id);
    const player = await Player.findOne({ _id: id }).populate("stats");
    console.log(player);
    res.status(200).json({ data: player });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const player = await Player.findByIdAndUpdate(id, { name: "Vini jr." });
    console.log(player);
    res.status(200).json({ data: player });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const updateWholePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, jersy, club, country } = req.body;
    const player = await Player.updateOne(
      { _id: id },
      {
        $set: {
          name: name,
          jersy: jersy,
          club: club,
          country: country,
        },
      }
    );
    console.log(player);
    res.status(200).json({ data: player });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const deletePlayer = async (req, res) => {
  try {
    const { id } = res.params;
    const data = await Player.findByIdAndDelete(id);
    console.log(data);
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
