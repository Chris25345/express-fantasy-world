import { FC, PropsWithChildren } from "react";
import { useQuery } from "react-query";
import { Humanoids, Occupations, Races } from "../services";
import { HumanoidsContext } from "./humanoids-context";

export const HumanoidsProvider: FC<PropsWithChildren> = ({ children }) => {
  const { data: humanoids } = useQuery({
    queryKey: ["humanoids"],
    queryFn: () => Humanoids.getAll(),
  });
  const { data: races } = useQuery({
    queryKey: ["races"],
    queryFn: () => Races.getAll(),
  });
  const { data: occupations } = useQuery({
    queryKey: ["occupations"],
    queryFn: () => Occupations.getAll(),
  });
  return (
    <HumanoidsContext.Provider
      value={{
        humanoids: humanoids?.data ?? [],
        races: races?.data ?? [],
        occupations: occupations?.data ?? [],
      }}
    >
      {children}
    </HumanoidsContext.Provider>
  );
};
