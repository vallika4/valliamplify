import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}  alt="logo" />
        <h1>
          Tally checker Application
        </h1>
        <a
          className="App-link"
          href="https://www.intersectiq.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IIQ
        </a>
      </header>
    </div>
  );
}

export default App;
