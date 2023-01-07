import { FC, useContext } from "react";
import { HumanoidsContext } from "../../contexts/humanoids-context";
import { v4 } from "uuid";

export const Table: FC = () => {
  const { humanoids } = useContext(HumanoidsContext);

  return (
    <>
      {humanoids && humanoids.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Race</th>
              <th>Occupation</th>
            </tr>
          </thead>
          <tbody>
            {humanoids.map((humanoid) => (
              <tr key={v4()}>
                <td>{humanoid.name}</td>
                <td>{humanoid.gender}</td>
                <td>{humanoid.age}</td>
                <td>{humanoid.race}</td>
                <td>
                  {humanoid.occupations.map((occ) => (
                    <div key={occ}>{occ}</div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4>No humanoids found</h4>
      )}
    </>
  );
};
