import { useRef, useState } from 'react';
import { Focus, RotateCcw } from 'lucide-react';
import './UseRef.css';

const UseRef = () => {
  const inputRef = useRef(null);
  const [name, setName] = useState('');

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleReset = () => {
    setName('');
    inputRef.current.focus();
  };

  return (
    <div className="hook-page">
      <div className="hook-container">
        {/* Header */}
        <div className="hook-header">
          <span className="hook-badge">React Hook #04</span>

          <h1>
            React <span>useRef</span> Hook
          </h1>

          <p>
            Learn how to access DOM elements and store values without causing
            unnecessary re-renders.
          </p>
        </div>

        {/* Introduction */}
        <section className="hook-section">
          <h2>What is useRef?</h2>

          <p>
            The useRef Hook allows you to reference a value that is not needed
            for rendering. It can also access DOM elements directly.
          </p>
        </section>

        {/* Syntax */}
        <section className="hook-section">
          <h2>Syntax</h2>

          <pre className="code-example">
            <code>{`const myRef = useRef(initialValue);`}</code>
          </pre>

          <ul className="syntax-list">
            <li>
              <strong>useRef:</strong> Creates a reference object.
            </li>
            <li>
              <strong>current:</strong> Stores the reference value.
            </li>
            <li>
              <strong>initialValue:</strong> Initial reference value.
            </li>
          </ul>
        </section>

        {/* Live Demo */}
        <section className="hook-section">
          <h2>Live Example</h2>

          <p>
            Click the Focus button to automatically focus the input field using
            useRef.
          </p>

          <div className="demo-card">
            <span className="demo-label">Input Focus Example</span>

            <input
              ref={inputRef}
              type="text"
              placeholder="Enter your name..."
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <div className="counter-buttons">
              <button onClick={handleFocus} className="counter-btn primary">
                <Focus size={18} />
                Focus Input
              </button>

              <button onClick={handleReset} className="counter-btn reset">
                <RotateCcw size={17} />
                Reset
              </button>
            </div>

            <h3>Your Name: {name || 'No name entered'}</h3>
          </div>
        </section>

        {/* Example Code */}
        <section className="hook-section">
          <h2>Example Code</h2>

          <pre className="code-example">
            <code>
              {`import { useRef } from 'react';

function App() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />

      <button onClick={handleFocus}>
        Focus Input
      </button>
    </div>
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
            <li>useRef is a React Hook.</li>
            <li>It can access DOM elements.</li>
            <li>It stores values between renders.</li>
            <li>Updating ref.current does not trigger a re-render.</li>
            <li>Access the value using ref.current.</li>
            <li>Hooks must be called at the top level.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default UseRef;
