import React from "react";
import NumbersDisplay from "../NumbersDisplay";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="Header">
        <NumbersDisplay value={0} />
        <div className="Face">
          <span aria-label="face">😃</span>
        </div>
        <NumbersDisplay value={234} />
      </div>
      <div className="Body">Body</div>
    </div>
  );
};
export default App;
