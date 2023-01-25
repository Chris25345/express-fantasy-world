import { PrismaClient } from "@prisma/client";
import { formatHumanoids } from "../utils";

const prisma = new PrismaClient();

class HumanoidService {
  async findMany() {
    const humanoids = await prisma.humanoid.findMany();
    const formattedHumanoids = await formatHumanoids(humanoids);
    return formattedHumanoids;
  }
}

export default new HumanoidService();
