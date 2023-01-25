import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class RacesService {
  async findMany() {
    return prisma.race.findMany();
  }

  async findUnique(id: number) {
    return prisma.race.findUnique({ where: { id } });
  }
}

export default new RacesService();
