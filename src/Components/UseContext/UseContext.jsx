import { useState, createContext, useContext } from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';
// import './UseContext.css';

// Create Context
const UserContext = createContext();

const UseContext = () => {
  const [name, setName] = useState('Shuvo');

  return (
    <div className="hook-page">
      <div className="hook-container">
        {/* Header */}
        <div className="hook-header">
          <span className="hook-badge">React Hook #06</span>

          <h1>
            React <span>useContext</span> Hook
          </h1>

          <p>
            Learn how to share data between components without passing props
            manually through every level.
          </p>
        </div>

        {/* Introduction */}
        <section className="hook-section">
          <h2>What is useContext?</h2>

          <p>
            The useContext Hook allows components to access data from a Context
            without passing props through multiple components.
          </p>
        </section>

        {/* Syntax */}
        <section className="hook-section">
          <h2>Syntax</h2>

          <pre className="code-example">
            <code>{`const value = useContext(MyContext);`}</code>
          </pre>

          <ul className="syntax-list">
            <li>
              <strong>createContext:</strong> Creates a Context.
            </li>
            <li>
              <strong>Provider:</strong> Shares data with child components.
            </li>
            <li>
              <strong>useContext:</strong> Accesses the shared data.
            </li>
          </ul>
        </section>

        {/* Props Drilling */}
        <section className="hook-section">
          <h2>Why useContext?</h2>

          <p>
            Without useContext, we need to pass props through multiple
            components. This is called Props Drilling.
          </p>

          <pre className="code-example">
            <code>
              {`App
               |
               | props
               v
             Parent
               |
               | props
               v
             Child
               |
               | props
               v
             User`}
            </code>
          </pre>

          <p>useContext helps us avoid unnecessary prop passing.</p>
        </section>

        {/* Live Demo */}
        <section className="hook-section">
          <h2>Live Example</h2>

          <p>
            Change the name below. The child component will access the same data
            using useContext.
          </p>

          <div className="demo-card">
            <span className="demo-label">Enter Your Name</span>

            <input
              type="text"
              placeholder="Enter your name..."
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <UserContext.Provider value={name}>
              <Profile />
            </UserContext.Provider>
          </div>
        </section>

        {/* Example Code */}
        <section className="hook-section">
          <h2>Example Code</h2>

          <pre className="code-example">
            <code>
              {`import { createContext, useContext } from 'react';

const UserContext = createContext();

function User() {
  const name = useContext(UserContext);

  return <h2>Hello, {name}</h2>;
}

function App() {
  return (
    <UserContext.Provider value="Shuvo">
      <User />
    </UserContext.Provider>
  );
}

export default App;`}
            </code>
          </pre>
        </section>

        {/* Key Points */}
        <section className="hook-section">
          <h2>Key Points</h2>

          <ul className="key-points">
            <li>useContext is a React Hook.</li>
            <li>It helps share data between components.</li>
            <li>It reduces Props Drilling.</li>
            <li>createContext creates a Context.</li>
            <li>Provider makes data available to child components.</li>
            <li>useContext reads the Context value.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

// Child Component
const Profile = () => {
  const name = useContext(UserContext);

  return (
    <div className="context-result">
      <h3>Child Component</h3>
      <p>Hello, {name || 'Guest'}!</p>
      <span>Data received using useContext</span>
    </div>
  );
};

export default UseContext;
