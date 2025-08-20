import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'; // ✅ Required import

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          data-testid="learn-link"
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* ✅ Required usage of TodoList */}
      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
