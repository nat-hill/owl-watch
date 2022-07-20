import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import App from '../../App';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/add" className="navbar-brand">User Tracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/update:id" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/update_clases/:id" className="nav-link">Create Exercise Log</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}