import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { formatHumanoids } from "./utils/format-humanoids";

const prisma = new PrismaClient();
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.get("/api/humanoids", async (req, res) => {
  const humanoids = await prisma.humanoid.findMany();
  const formattedHumanoids = await formatHumanoids(humanoids);

  res.json(formattedHumanoids);
});

app.get("/api/races", async (req, res) => {
  const races = await prisma.race.findMany();
  res.json(races);
});

app.get("/api/occupations", async (req, res) => {
  const occupations = await prisma.occupation.findMany();
  res.json(occupations);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
