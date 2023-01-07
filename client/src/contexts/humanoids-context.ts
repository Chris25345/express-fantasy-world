import { createContext } from "react";
import { Humanoid, Occupation, Race } from "../types";

interface HumanoidsContextValues {
  humanoids: Humanoid[];
  races: Race[];
  occupations: Occupation[];
}

export const HumanoidsContext = createContext<HumanoidsContextValues>({
  humanoids: [],
  races: [],
  occupations: [],
});
