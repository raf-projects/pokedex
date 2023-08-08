import React from 'react';

import './App.css';
import Nav from './shared/Nav';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import PokeCard from './components/PokeCard/PokeCard';

function App() {
  return (
    <div>
      <div>BIG</div>
      <Nav />

      <Routes>
        <Route path='/pokecard' element={<PokeCard/>}></Route>
        <Route path='/' element={<Dashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
