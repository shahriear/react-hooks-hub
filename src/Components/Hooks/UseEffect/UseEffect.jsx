import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Code2,
  Zap,
  RefreshCw,
  CheckCircle2,
  Lightbulb,
} from 'lucide-react';

import './UseEffect.css';

const UseEffect = () => {
  return (
    <main className="use-effect-page">
      <div className="use-effect-container">
        {/* Back Button */}
        <Link to="/" className="ue-back">
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        {/* Hero Section */}
        <section className="ue-hero">
          <span className="ue-badge">
            <Code2 size={15} />
            React Hooks
          </span>

          <h1>
            Learn <span>useEffect</span>
          </h1>

          <p>
            Understand how useEffect works and how to synchronize your React
            components with external systems.
          </p>

          <div className="ue-hero-info">
            <span>
              <BookOpen size={15} /> Beginner Friendly
            </span>
            <span>
              <Zap size={15} /> Practical Examples
            </span>
          </div>
        </section>

        {/* Introduction */}
        <section className="ue-section">
          <div className="ue-heading">
            <BookOpen size={21} />
            <h2>What is useEffect?</h2>
          </div>

          <p>
            <strong>useEffect</strong> is a React Hook that lets you synchronize
            a component with an external system. You can use it for API calls,
            timers, event listeners, and updating the browser document title.
          </p>
        </section>

        {/* Syntax */}
        <section className="ue-section">
          <div className="ue-heading">
            <Code2 size={21} />
            <h2>Syntax</h2>
          </div>

          <div className="ue-code">
            <div className="ue-code-header">
              <span>JavaScript</span>
              <span>Syntax</span>
            </div>

            <pre>
              <code>{`import { useEffect } from 'react';

useEffect(() => {
  // Your code here

  return () => {
    // Cleanup function
  };
}, [dependencies]);`}</code>
            </pre>
          </div>
        </section>

        {/* How it works */}
        <section className="ue-section">
          <div className="ue-heading">
            <Zap size={21} />
            <h2>How does it work?</h2>
          </div>

          <div className="ue-cards">
            <div className="ue-card">
              <span>01</span>
              <h3>Effect Function</h3>
              <p>Contains the code you want to run after React commits.</p>
            </div>

            <div className="ue-card">
              <span>02</span>
              <h3>Dependencies</h3>
              <p>Tell React when the effect needs to run again.</p>
            </div>

            <div className="ue-card">
              <span>03</span>
              <h3>Cleanup</h3>
              <p>Removes timers, subscriptions, and event listeners.</p>
            </div>
          </div>
        </section>

        {/* Basic Example */}
        <section className="ue-section">
          <div className="ue-heading">
            <Code2 size={21} />
            <h2>Basic Example</h2>
          </div>

          <p>Let's change the browser tab title whenever the count changes.</p>

          <div className="ue-code">
            <div className="ue-code-header">
              <span>JavaScript</span>
              <span>Example</span>
            </div>

            <pre>
              <code>{`import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

export default Counter;`}</code>
            </pre>
          </div>
        </section>

        {/* Dependencies */}
        <section className="ue-section">
          <div className="ue-heading">
            <RefreshCw size={21} />
            <h2>Dependency Array</h2>
          </div>

          <p>There are three common dependency patterns:</p>

          <div className="ue-dependencies">
            <div className="ue-dependency">
              <code>useEffect(() =&gt; {'{}'})</code>
              <div>
                <h3>No Dependency Array</h3>
                <p>Runs after every commit.</p>
              </div>
            </div>

            <div className="ue-dependency">
              <code>useEffect(() =&gt; {'{}'}, [])</code>
              <div>
                <h3>Empty Dependency Array</h3>
                <p>Runs after the initial mount.</p>
              </div>
            </div>

            <div className="ue-dependency">
              <code>useEffect(() =&gt; {'{}'}, [count])</code>
              <div>
                <h3>With Dependencies</h3>
                <p>Runs after the initial mount and when count changes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cleanup */}
        <section className="ue-section">
          <div className="ue-heading">
            <CheckCircle2 size={21} />
            <h2>Cleanup Function</h2>
          </div>

          <p>
            Cleanup functions help prevent memory leaks and remove unnecessary
            subscriptions or timers.
          </p>

          <div className="ue-code">
            <div className="ue-code-header">
              <span>JavaScript</span>
              <span>Cleanup Example</span>
            </div>

            <pre>
              <code>{`useEffect(() => {
  const timer = setInterval(() => {
    console.log('Hello React!');
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);`}</code>
            </pre>
          </div>
        </section>

        {/* Important Tips */}
        <section className="ue-tips">
          <div className="ue-heading">
            <Lightbulb size={21} />
            <h2>Important Tips</h2>
          </div>

          <ul>
            <li>Call useEffect at the top level of your component.</li>
            <li>Never call Hooks inside loops or conditions.</li>
            <li>Include all reactive dependencies.</li>
            <li>Use cleanup when working with timers and subscriptions.</li>
          </ul>
        </section>

        {/* Next Hook */}
        <section className="ue-next">
          <div>
            <span>Continue Learning</span>
            <h2>Ready for the next Hook?</h2>
          </div>

          <Link to="/hooks/useRef">
            Learn useRef <ArrowRight size={18} />
          </Link>
        </section>
      </div>
    </main>
  );
};

export default UseEffect;
