import logo from './logo.svg';
import './App.css';


import CreateProject from './routecomponents/CreateProject';
import Navbar from './Components/Navbar'
//import { Router } from 'express';

function App() {
  return (

        <div className="App">
          <Navbar />
          <header className="App-header">
        
               <CreateProject />
           </header>
        </div>
      

        
  );
}

export default App;
