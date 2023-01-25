import { Humanoid, Occupation } from "@prisma/client";
import { FormattedHumanoid } from "../types";
import {
  HumanoidsOccupationsService,
  OccupationService,
  RacesService,
} from "../services";

export const formatHumanoids = async (humanoids: Humanoid[]) => {
  const formattedHumanoids: FormattedHumanoid[] = [];
  for (let i = 0; i < humanoids.length; i++) {
    const humanoid = humanoids[i];
    let occupations: Occupation[] = [];

    const race = await RacesService.findUnique(humanoid?.raceId);
    const humanoidOcc = await HumanoidsOccupationsService.findFirst(
      humanoid?.id
    );
    if (humanoidOcc?.occupationId) {
      occupations = await OccupationService.findManyById(
        humanoidOcc?.occupationId
      );
    }

    formattedHumanoids.push({
      name: humanoid.name ?? "",
      gender: humanoid.gender ?? "",
      age: humanoid.age,
      occupations: occupations.map((occ) => occ.name),
      race: race?.name ?? "",
    });
  }
  return formattedHumanoids;
};
