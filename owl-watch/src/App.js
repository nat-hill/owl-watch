import './App.css';

import Navbar from './Components/Navbar';

import Home from './pages/home';
import Update from './pages/update';
import Add from './pages/add';
import Display from './Components/display-user.component.js';
import About from './pages/about';
import Contact from './pages/contact';
//import { Router } from 'express';

function App() {
  let component
  switch (window.location.pathname) {
      case "/":
        component = <Home />
        break

      case "/update":
        component = <Update />
        break

      case "/add":
        component = <Add />
        break
      case "/display":
        component = <Display />
        break
      case "/about":
        component = <About />
        break

      case "/contact":
        component = <Contact />
        break

      default:
  }


  return (
    <>
    <Navbar />
    <div className="container">
    {component}
    </div>
    </>
      

        
  );
}

export default App;
