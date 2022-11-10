import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  // Executa toda vez que o counter atualiza
  useEffect(() => {
    console.log('component update', counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
