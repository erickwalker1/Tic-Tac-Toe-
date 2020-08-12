import React from 'react';
import ReactDOM from 'react-dom'

import Game from './components/Game/Game'

import Houston from './images/HoustonRockets.png'

import Miami from './images/MiamiHeat.png'

import pelicans from '../src/images/NewOrleansPelicans.jpg'

import detroit from './images/Pistons.png'

import './App.css';

function App(props) {
  const HTown = {
    name: 'Houston Rockets',
    logoSrc: Houston
  }

  const Heat = {
    name: 'Miami Heat',
    logoSrc: Miami
  }

  const Pelicans = {
    name: 'New Orleans Pelicans',
    logoSrc: pelicans
  }

  const Detroit = {
    name: 'Detroit',
    logoSrc: detroit
  }

  return (
    <div className="App">
      <Game
        venue="Toyota Center"
        homeTeam={HTown}
        visitingTeam={Pelicans}
      />
      <Game
        venue="Little Ceasers Arena"
        homeTeam={Detroit}
        visitingTeam={Heat}
      />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

export default App;
