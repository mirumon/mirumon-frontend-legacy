import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  return (
    <div className="App" onClick={() => dispatch({ type: 'test', payload: ['dasd'] })}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
