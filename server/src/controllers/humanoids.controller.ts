import { Request, Response } from "express";
import { HumanoidService } from "../services";

class HumanoidsController {
  async findMany(req: Request, res: Response) {
    try {
      const humanoids = await HumanoidService.findMany();
      res.json(humanoids);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new HumanoidsController();
