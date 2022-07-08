import logo from './logo.svg';
import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Clock from './pages/clock';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home/>} ></Route>
      <Route exact path='/clock' element={<Clock/>} ></Route>
    </Routes>
    </Router>
  );
}

export default App;
