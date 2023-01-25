import express from "express";
import dotenv from "dotenv";
import { router } from "./src/router";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.use("/api", router);

app.listen(port, () => console.log(`Listening on port ${port}`));
