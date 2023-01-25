import { Request, Response } from "express";
import { RacesService } from "../services";

class RacesController {
  async findMany(req: Request, res: Response) {
    try {
      const races = await RacesService.findMany();
      res.json(races);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new RacesController();
