import './App.css';
import { useState, useEffect } from 'react';
import TempWorkoutDisplay from './components/TempWorkoutDisplay';
import TabDisplay from './components/TabDisplay';
import GraphDisplay from './components/GraphDisplay';

const data = [{name: 'Monday', volume1: 400, volume2: 900, amt: 2400}, 
  {name: 'Tuesday', volume1: 200, volume2: 2400, amt: 2400},
  {name: 'Wednesday', volume1: 300, volume2: 1100, amt: 2400},
  {name: 'Thursday', volume1: 100, volume2: 800, amt: 2400},
  {name: 'Friday', volume1: 100, volume2: 600, amt: 2400}];


function App() {
// State for storing workouts
  const [workouts, setWorkouts] = useState([]);

  const fetchWorkouts = async () => {
    // Send GET request to 'workouts/all' endpoint
    const response = await fetch('http://localhost:4001/workouts/all')

      // Parse JSON of response
      const workouts = await response.json()

      // Set state with workouts
      setWorkouts(workouts)

      // Log workouts to console
      console.log(workouts)
  }

  // Fetch workouts when component mounts
  useEffect(() => {
    fetchWorkouts()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <GraphDisplay data={data}/>
      </header>

      <TabDisplay/>

      <TempWorkoutDisplay data={workouts}/>

    </div>
  );
}

export default App;
