import logo from './logo.svg';
import './App.css';
import { Link, Router } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to ='/'>Home</Link>
              </li>
              <li to='/about'>About</li>
            </ul>
          </nav>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
