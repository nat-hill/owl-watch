import './App.css';
import React from 'react';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Clock from './pages/clock';

function App() {
  return (
    
    <html>
    <body>

    <Router>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home/>} ></Route>
      <Route path='/clock' element={<Clock/>} ></Route>
    </Routes>
    </Router>
    </body>
    </html>

  );
}

export default App;
