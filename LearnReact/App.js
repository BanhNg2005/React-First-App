import './App.css';
import { useState, useEffect } from 'react';
// useState is a hook that allows you to use state in a functional component.

// 3 important concepts in React: components, props, and state.

const App = () => {
  // This is a hook. It's a function that allows you to use state in a functional component.
  const [counter, setCounter] = useState(0); 

  useEffect(() => {
    // NEVER MODIFY STATE MANUALLY. ALWAYS USE THE SETTER FUNCTION.
    alert(`The counter is now ${counter}.`);
  }, [counter]); // The second argument is an array of dependencies. If the dependencies change, the effect will run.
  
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
