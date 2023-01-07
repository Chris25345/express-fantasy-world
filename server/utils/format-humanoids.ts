import { PrismaClient, Humanoid } from "@prisma/client";
import { FormattedHumanoid } from "../types";
const prisma = new PrismaClient();

export const formatHumanoids = async (humanoids: Humanoid[]) => {
  const formattedHumanoids: FormattedHumanoid[] = [];
  for (let i = 0; i < humanoids.length; i++) {
    const humanoid = humanoids[i];

    const humanoidRace = await prisma.race.findUnique({
      where: {
        id: humanoid?.raceId,
      },
    });
    const humanoidOccupationId = await prisma.humanoids_Occupations.findFirst({
      where: {
        humanoidId: humanoid?.id,
      },
    });
    const humanoidOccupation = await prisma.occupation.findMany({
      where: {
        id: humanoidOccupationId?.occupationId,
      },
    });

    formattedHumanoids.push({
      name: humanoid.name ?? "",
      gender: humanoid.gender ?? "",
      age: humanoid.age,
      occupations: humanoidOccupation.map((occ) => occ.name),
      race: humanoidRace?.name ?? "",
    });
  }
  return formattedHumanoids;
};
