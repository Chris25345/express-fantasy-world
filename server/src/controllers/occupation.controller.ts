import { Request, Response } from "express";
import { OccupationService } from "../services";

class OccupationController {
  async findMany(req: Request, res: Response) {
    try {
      const occupations = await OccupationService.findMany();
      res.json(occupations);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new OccupationController();
