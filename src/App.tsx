import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Route,Routes } from 'react-router-dom';
import HomePage from './component/HomePage';

function App() {
    
  return (
    <div className="App">
      
      <HomePage/>
    </div>
  );
}

export default App;
