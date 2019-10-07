//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [homeScore, setHomeScore] = useState(0);
  let [awayScore, setAwayScore] = useState(0);
  let [down, setDown] = useState(1);
  let [toGo, setToGo] = useState(10);
  let [ballOn, setBallOn] = useState(50);
  let [quarter, setQuarter] = useState(0);
  let [possession, setPossession] = useState(false)

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow 
          down={down} 
          toGo={toGo}
          ballOn={ballOn}
          quarter={quarter}
        />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button 
            onClick ={() => setHomeScore(homeScore += 7)}
            className="homeButtons__touchdown">
            Home Touchdown
          </button>
          <button 
            onClick ={() => setHomeScore(homeScore += 3)}
            className="homeButtons__fieldGoal">
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button 
            onClick ={() => setAwayScore(awayScore += 7)}
            className="awayButtons__touchdown">
            Away Touchdown
          </button>

          <button 
            onClick ={() => setAwayScore(awayScore += 3)}
            className="awayButtons__fieldGoal">
            Away Field Goal
          </button>

          <button 
            onClick ={() => {
              if (down === 4){
                setPossession(!possession)
                setDown(1)
                setToGo(10)
              
              } else {
              setDown(down + 1)
              }
            }}
            className="awayButtons__fieldGoal">
            Down
          </button>

          <button 
            onClick ={() => {
              if (ballOn === 1){
                if (possession) {
                  setHomeScore(homeScore + 7)
                  
                } else {
                  setAwayScore(awayScore + 7)

                }
                setDown(1)
                setToGo(10)
                setBallOn(50)
                setPossession(!possession)

              }else if (toGo === 1) {
                setDown(1)
                setToGo(10)
                setBallOn(ballOn - 1)

              } else {
                setToGo(toGo - 1)
                setBallOn(ballOn - 1)
              }
            
            }}
            className="awayButtons__fieldGoal">
            Gain Yard
          </button>

          <button 
            onClick ={() => {
              if (quarter === 4) {
                setHomeScore(0)
                setAwayScore(0)
                setDown(1)
                setToGo(10)
                setBallOn(50)
                setQuarter(1)
              } else {
                setQuarter(quarter + 1)
              }
            }}
            className="awayButtons__touchdown">
            Quarter
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
