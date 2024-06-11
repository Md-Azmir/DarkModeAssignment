import React, { useState } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <header className="App-header">
        <h1>Welcome to My App</h1>
        <button onClick={toggleDarkMode}>
          {isDarkMode?("Toggle Light Mode"):("Toggle Dark Mode")}
        </button>
      </header>
    </div>
  );
}

export default App;
