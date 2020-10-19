import React from "react";
import Scoreboard from "./Scoreboard";
import "./App.css";
import Score from "./Score";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Score></Score>
        <Scoreboard></Scoreboard>
      </header>
    </div>
  );
}

export default App;
