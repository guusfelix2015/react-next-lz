import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter {counter}</h1>
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <button type="button" onClick={() => setReverse(!reverse)}>
          Reverse
        </button>
        <button type="button" onClick={increment}>
          Incrementar
        </button>
      </header>
    </div>
  );
}

export default App;
