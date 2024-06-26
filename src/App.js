import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };
  const decrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated && (
          <div>
            <h3>Hello {user.name}</h3>
            <p>Count: {count}</p>
            <button className="btn1" onClick={incrementCounter}>Increment</button>
            <button className="btn1" onClick={decrementCounter}>Decrement</button>
          </div>
        )}

        {isAuthenticated ? (
          <button className="btn1" onClick={(e) => logout()}>
            Logout
          </button>
        ) : (
          <button className="btn1" onClick={(e) => loginWithRedirect()}>
            Login
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
