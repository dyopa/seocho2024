import { useState } from 'react';
import './App.css';
import Hello from './components/Hello';

function App() {
  const [count, setCount] = useState(0);
  const [didLogin, setdidLogin] = useState(true);

  const toggleLogin = () => {
    setdidLogin(!didLogin);
  };

  return (
    <>
      <div>{didLogin && <Hello name="Jade" age={33} />}</div>
      <button onClick={toggleLogin}>
        Toggle {didLogin ? 'Logined' : 'Not Logined'}
      </button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
