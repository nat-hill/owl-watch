import './App.scss';
import 'boxicons/css/boxicons.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/blank';
import React from 'react';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Blank />} />
          <Route path='/started' element={<Blank />} />
          <Route path='/started' element={<Blank />} />
          <Route path='/started' element={<Blank />} />
          <Route path='/started' element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
