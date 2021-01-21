import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NumbersDisplay from "../NumbersDisplay";
import generateCells from "../../utils";
import CellButton from "../CellButton";

import "./App.scss";

const App: React.FC = () => {
  const [cells, setCells] = useState(generateCells());

  const renderCells = (): React.ReactNode => {
    return cells.map((row) => row.map((cell) => <CellButton key={uuidv4()} />));
  };

  return (
    <div className="App">
      <div className="Header">
        <NumbersDisplay value={0} />
        <div className="Face">
          <span aria-label="face">😃</span>
        </div>
        <NumbersDisplay value={234} />
      </div>
      <div className="Body">{renderCells()}</div>
    </div>
  );
};
export default App;
