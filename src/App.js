import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemps } from "./actions/action";
import { Line, Bar } from "react-chartjs-2";
import './App.css';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.temps)


  const fetchData = () => {
    dispatch(getTemps())
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>NJ Weather</h1>
      </header>
      <div>
        <button onClick={() => fetchData()}>Bar Chart</button>
        {<Bar data={state.data} />}
        <button onClick={() => fetchData()}>Line Chart</button>
        {<Line data={state.data} />}
      </div>

      {state.loading && <div className="loading">Searching for temperatures...</div>}
      {state.errorMessage !== "" ? <div>{state.errorMessage}</div> : null}
    </div>
  );
}



export default App;
