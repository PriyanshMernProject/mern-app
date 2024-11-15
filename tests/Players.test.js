import request from "supertest";
import { app } from "../index";

describe("GET/api/AllPlayers", () => {
  it("Should returns all players", async () => {
    const res = await request(app).get("/api/v1/players/players");
    expect(res.statusCode).toBe(200);
    console.log(res.body);
    //expect(res.body.length).toBeGreaterThan(0);
  });
});
describe("GET/api/singePlayer/:id", () => {
  it("should return single player", async () => {
    const res = await request(app).get(
      "/api/v1/players/singlePlayer/672cf1bd4b428f23e6525b08"
    );
    expect(res.statusCode).toBe(200);
    //expect(res.body.length).toBeGreaterThan(0);
    console.log(res.body);
  });
});
describe("POST/api/player", () => {
  it("should write a player record", async () => {
    const res = await request(app).post("/api/v1/players/newPlayer");
    expect(res.statusCode).toBe(201).send({
      name: "Messi",
      jersy: "10",
      club: "Barcelona",
      country: "Argentina",
    });
    //expect(res.body.name).toBe("Messi");
    console.log(res.body.data);
  });
});
describe("PATCH/api/updatePlayer/:id", () => {
  it("should update part of existing record", async () => {
    const res = await request(app)
      .patch("/api/v1/players/updatePlayer/672cf11a4b428f23e6525b04")
      .send({
        name: "Vini jr.",
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.data.name).toBe("Vini jr.");
    console.log("update data", res.body);
  });
});
describe("DELETE/api/deletePlayer/:id", () => {
  it("should delete a player", async () => {
    const res = await request(app).delete(
      "/api/v1/players/deletePlayer/672cf1bd4b428f23e6525b08"
    );
    expect(res.statusCode).toBe(200);
    console.log(res.body.data);
  });
});
