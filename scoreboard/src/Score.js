import React, { useState, useEffect } from "react";
import "./Score.css";
import logo from "./Zeichenfläche.png";
import ReactStopwatch from "react-stopwatch";
function Score() {
  let [score, setScore] = useState(0);
  let [scoreb, setScoreb] = useState(0);
  let [satz, setSatz] = useState(0);
  let [satzb, setSatzb] = useState(0);
  const [autoStart, setautoStart] = useState(false);
  function inc() {
    setScore(++score);
  }
  function inc2() {
    setScoreb(++scoreb);
  }

  function satzinc() {
    setSatz(++satz);
  }
  function satzinc2() {
    setSatzb(++satzb);
  }

  function resetScorea() {
    setScore(--score);
  }
  function resetScoreb() {
    setScoreb(--scoreb);
  }

  function resetSatza() {
    setSatz(--satz);
  }
  function resetSatzb() {
    setSatzb(--satzb);
  }

  function resetPoints() {
    setScore((score = 0));
    setScoreb((scoreb = 0));
  }

  function resetSätze() {
    setSatz((satz = 0));
    setSatzb((satzb = 0));
  }

  function startTimer() {
    setautoStart();
  }

  return (
    <div>
      <button className="ResetButton3" onClick={resetPoints}>
        Punkte zurücksetzen
      </button>
      <button className="ResetButton3" onClick={resetSätze}>
        Sätze zurücksetzen
      </button>
      <br></br>
      <button className="ResetButton" onClick={resetScorea}>
        TSV Ansbach -1 Punkt
      </button>
      <span className="TeamA">PUNKTE TSV {score}</span>
      <button className="TeamAButton" onClick={inc}>
        TSV Ansbach +1 Punkt
      </button>
      <br></br>
      <button className="Reset2Button" onClick={resetScoreb}>
        Gegner -1 Punkt
      </button>
      <span className="TeamB">PUNKTE GEGNER {scoreb}</span>
      <button className="TeamBButton" onClick={inc2}>
        Gegner +1 Punkt
      </button>
      <br></br>
      <button className="ResetButton" onClick={resetSatza}>
        TSV Ansbach -1 Satz
      </button>
      <span className="TeamA">SATZ TSV {satz}</span>
      <button className="TeamAButton" onClick={satzinc}>
        TSV Ansbach +1 Satz
      </button>
      <br></br>
      <button className="Reset2Button" onClick={resetSatzb}>
        Gegner -1 Satz
      </button>
      <span className="TeamB">SATZ GEGNER {satzb}</span>
      <button className="TeamBButton" onClick={satzinc2}>
        Gegner +1 Satz
      </button>
      <br></br>
      <span className="team">
        <img className="Logo" src={logo}></img>
        <span className="Ansbach">TSV Ansbach </span> <span> </span>
        <span> </span>
        <span> </span>
        <span className="Satz"> {satz}</span>{" "}
        <span className="Score">{score}</span>
        <br></br>
        <span className="Gegner">TSV Unterhaching</span>{" "}
        <span className="Satzb">{satzb}</span>{" "}
        <span className="Scoreb">{scoreb}</span>
        <br></br>
      </span>
      <br></br>
      {/*<ReactStopwatch
        seconds={0}
        minutes={0}
        hours={0}
        autoStart={autoStart}
        limit="99:00:00"
        onChange={({ hours, minutes, seconds }) => {}}
        onCallback={() => console.log("Finish")}
        render={({ formatted }) => {
          return (
            <div className="Stopwatch">
              <p>
                Spielzeit: <br></br>{" "}
                <button
                  className="TeamBButton"
                  onClick={() => setautoStart(true)}
                >
                  Start Zeit
                </button>
                {formatted}
              </p>
            </div>
          );
        }}
      />
      <br></br>
      <ReactStopwatch
        seconds={0}
        minutes={0}
        hours={0}
        limit="00:00:30"
        onChange={({ hours, minutes, seconds }) => {}}
        render={({ formatted }) => {
          return (
            <div className="Stopwatch">
              <p>
                Auszeit: <br></br>{" "}
                <button className="TeamBButton" onClick={formatted}>
                  Start Auszeit
                </button>
                {formatted}
              </p>
            </div>
          );
        }}
      />*/}
    </div>
  );
}
export default Score;
