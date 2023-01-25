import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class HumanoidsOccupationsService {
  async findFirst(humanoidId: number) {
    return prisma.humanoids_Occupations.findFirst({
      where: { humanoidId },
    });
  }
}

export default new HumanoidsOccupationsService();
