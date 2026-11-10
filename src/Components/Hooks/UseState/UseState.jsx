import { useState } from 'react';
import { RotateCcw, Plus, Minus } from 'lucide-react';
// import './UseState.css';

const UseState = () => {
  const [count, setCount] = useState(0);

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="hook-page">
      <div className="hook-container">
        {/* Header */}
        <div className="hook-header">
          <span className="hook-badge">React Hook #01</span>

          <h1>
            React <span>useState</span> Hook
          </h1>

          <p>
            Learn how to manage and update state in React functional components
            using the useState Hook.
          </p>
        </div>

        {/* Introduction */}
        <section className="hook-section">
          <h2>What is useState?</h2>

          <p>
            The useState Hook allows you to add state to functional components.
            It returns the current state value and a function to update that
            value.
          </p>
        </section>

        {/* Syntax */}
        <section className="hook-section">
          <h2>Syntax</h2>

          <pre className="code-example">
            <code>{`const [state, setState] = useState(initialValue);`}</code>
          </pre>

          <ul className="syntax-list">
            <li>
              <strong>state:</strong> Current state value.
            </li>
            <li>
              <strong>setState:</strong> Function to update the state.
            </li>
            <li>
              <strong>initialValue:</strong> Initial state value.
            </li>
          </ul>
        </section>

        {/* Live Demo */}
        <section className="hook-section">
          <h2>Live Example</h2>

          <p>
            Click the buttons below to increase or decrease the counter value.
          </p>

          <div className="demo-card">
            <span className="demo-label">Counter Value</span>

            <h3 className="counter-value">{count}</h3>

            <div className="counter-buttons">
              <button
                onClick={() => setCount(count - 1)}
                className="counter-btn"
              >
                <Minus size={18} />
                Decrease
              </button>

              <button
                onClick={() => setCount(count + 1)}
                className="counter-btn primary"
              >
                <Plus size={18} />
                Increase
              </button>

              <button onClick={resetCount} className="counter-btn reset">
                <RotateCcw size={17} />
                Reset
              </button>
            </div>
          </div>
        </section>

        {/* Example Code */}
        <section className="hook-section">
          <h2>Example Code</h2>

          <pre className="code-example">
            <code>
              {`import { useState } from 'react';

               function Counter() {
               const [count, setCount] = useState(0);

               return (
               <div>
               <h2>{count}</h2>

               <button onClick={() => setCount(count + 1)}>
               Increase
               </button>
               </div>
                 );
                 }

              export default Counter;`}
            </code>
          </pre>
        </section>

        {/* Key Points */}
        <section className="hook-section">
          <h2>Key Points</h2>

          <ul className="key-points">
            <li>useState is a React Hook.</li>
            <li>It manages state inside functional components.</li>
            <li>Updating state triggers a re-render.</li>
            <li>It can store numbers, strings, arrays and objects.</li>
            <li>Never call Hooks inside loops or conditions.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default UseState;
