import { FC } from "react";
import { Table } from "../table";
import { HumanoidsProvider } from "../../contexts/humanoids-provider";
import "./styles.css";

export const App: FC = () => {
  return (
    <HumanoidsProvider>
      <div className="content">
        <h4>Humanoids</h4>
        <Table />
      </div>
    </HumanoidsProvider>
  );
};
