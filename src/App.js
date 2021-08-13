import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemps } from "./actions/action";
import { Line, Bar } from "react-chartjs-2";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import BarChartIcon from '@material-ui/icons/BarChart';
import TimelineIcon from '@material-ui/icons/Timeline';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.temps)
  const [chart, setChart] = useState("bar");

  const handleChart = (event, newChart) => {
    setChart(newChart);
  };

  useEffect(() => {
    dispatch(getTemps());
  }, [dispatch])
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>NJ Weather</h1>
      </header>
      <div>
      <ToggleButtonGroup
      value={chart}
      exclusive
      onChange={handleChart}
      aria-label="charts"
    >
      <ToggleButton value="bar" aria-label="bar chart">
        <BarChartIcon/>
      </ToggleButton>
      <ToggleButton value="line" aria-label="line chart">
        <TimelineIcon/>
      </ToggleButton>
       
       </ToggleButtonGroup> 
       
        
      </div>

      {state.loading && <div className="loading">Searching for temperatures...</div>}
      {state.errorMessage !== "" ? <div>{state.errorMessage}</div> : null}
      {chart === "bar" && <Bar data={state.data} />}
      {chart === "line" && <Line data={state.data}/>}
    </div>
  );
}



export default App;
