import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class OccupationService {
  async findMany() {
    return prisma.occupation.findMany();
  }

  async findManyById(id: number) {
    return prisma.occupation.findMany({
      where: { id },
    });
  }
}

export default new OccupationService();
