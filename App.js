import logo from './logo.svg';
import './App.css';
import data from './data';
import Tours from './components/Tours.js';
import { useState } from 'react';

function App(date) {

  const [tours, setTours] = useState(data);

  function removeTourHandler(id) {
    const newTour = tours.filter(tours => tours.id !== id);
    setTours(newTour);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2 >No Tours Left</h2>
        <button className='btn-white' onClick={() => setTours(data)}>
          refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      < Tours tours={tours} removeTourHandler={removeTourHandler}></Tours>
    </div>
  );
}

export default App;
