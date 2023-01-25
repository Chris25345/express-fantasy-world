import { Router } from "express";
import {
  HumanoidsController,
  RacesController,
  OccupationController,
} from "../controllers";

const router = Router();

router.get("/humanoids", HumanoidsController.findMany);
router.get("/races", RacesController.findMany);
router.get("/occupations", OccupationController.findMany);

export { router };
