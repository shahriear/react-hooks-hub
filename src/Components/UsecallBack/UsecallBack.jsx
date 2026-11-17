import React, { useCallback, useState } from 'react';
import Components1 from '../Components1';
import { RotateCcw, Code2 } from 'lucide-react';
import './UseCallback.css';

const UsecallBack = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // Normal Function
  const handleClick = () => {
    setCount(count + 1);
  };

  // useCallback Function
  const handleClick2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  // Reset Function
  const handleReset = () => {
    setCount(0);
    setCount2(0);
  };

  return (
    <div className="usecallback-page">
      {/* Header */}
      <section className="callback-header">
        <span className="callback-badge">
          <Code2 size={16} />
          React Hook
        </span>

        <h1>
          useCallback <span>Hook</span>
        </h1>

        <p>
          Learn how to cache functions between renders and optimize your React
          components.
        </p>
      </section>

      {/* Introduction */}
      <section className="callback-section">
        <h2>What is useCallback?</h2>

        <p>
          The <strong>useCallback</strong> Hook lets you cache a function
          definition between re-renders. It is useful when passing functions to
          optimized child components.
        </p>
      </section>

      {/* Syntax */}
      <section className="callback-section">
        <h2>Syntax</h2>

        <div className="callback-code">
          <div className="code-header">JavaScript</div>

          <pre>
            <code>{`const savedFunction = useCallback(() => {
  // Your code
}, [dependencies]);`}</code>
          </pre>
        </div>
      </section>

      {/* Live Example */}
      <section className="callback-section">
        <h2>Live Example</h2>

        <p>
          Click the buttons and check the browser console to understand how
          useCallback works with React.memo.
        </p>

        <div className="callback-demo">
          {/* Parent Component */}
          <div className="demo-parent">
            <span className="demo-label">Parent Component</span>

            <h3>Normal Function</h3>

            <p className="demo-count">{count}</p>

            <button onClick={handleClick} className="demo-button">
              + Increase Parent
            </button>
          </div>

          {/* Child Component */}
          <Components1 onClick={handleClick2} value={count2} />

          {/* Reset */}
          <button className="demo-reset" onClick={handleReset}>
            <RotateCcw size={16} />
            Reset Both
          </button>
        </div>
      </section>

      {/* Example Code */}
      <section className="callback-section">
        <h2>Example Code</h2>

        <p>Here is the same code used in the live example.</p>

        <div className="callback-code">
          <div className="code-header">UsecallBack.jsx</div>

          <pre>
            <code>{`import React, { useCallback, useState } from 'react';
import Components1 from '../Components1';

const UsecallBack = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // Normal Function
  const handleClick = () => {
    setCount(count + 1);
  };

  // useCallback Function
  const handleClick2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  return (
    <div>
      <button onClick={handleClick}>+</button>

      <p>{'Parent Count: {count}'}</p>

      <Components1
        onClick={handleClick2}
        value={count2}
      />
    </div>
  );
};

export default UsecallBack;`}</code>
          </pre>
        </div>
      </section>

      {/* Child Component Code */}
      <section className="callback-section">
        <h2>Child Component</h2>

        <div className="callback-code">
          <div className="code-header">Components1.jsx</div>

          <pre>
            <code>{`import React, { memo } from 'react';

const Components1 = ({ onClick, value }) => {
  console.log('Child Component Render');

  return (
    <div>
      <h1>My ToDo</h1>

      <button onClick={onClick}>+</button>

      <p>{'Child Count: {value}'}</p>
    </div>
  );
};

export default memo(Components1);`}</code>
          </pre>
        </div>
      </section>

      {/* Explanation */}
      <section className="callback-section">
        <h2>How It Works?</h2>

        <div className="callback-info">
          <div>
            <span className="info-number">01</span>
            <h3>Normal Function</h3>
            <p>Parent re-render হলে Normal Function নতুন করে তৈরি হয়।</p>
          </div>

          <div>
            <span className="info-number">02</span>
            <h3>useCallback</h3>
            <p>Dependency পরিবর্তন না হলে আগের Function Reference ধরে রাখে।</p>
          </div>

          <div>
            <span className="info-number">03</span>
            <h3>React.memo</h3>
            <p>
              Child-এর Props পরিবর্তন না হলে unnecessary re-render এড়াতে সাহায্য
              করে।
            </p>
          </div>
        </div>
      </section>

      {/* Important Points */}
      <section className="callback-section">
        <h2>Important Points</h2>

        <ul className="callback-points">
          <li>useCallback caches a function definition.</li>
          <li>It uses a dependency array.</li>
          <li>React.memo helps skip unnecessary child renders.</li>
          <li>useCallback does not stop parent re-renders.</li>
          <li>Use it when function reference stability matters.</li>
        </ul>
      </section>

      {/* Practice */}
      <section className="callback-practice">
        <span>Practice Time</span>

        <h2>Test Your Knowledge</h2>

        <p>
          Create a Parent and Child Component. Use useCallback and React.memo to
          understand how function references work.
        </p>
      </section>
    </div>
  );
};

export default UsecallBack;
