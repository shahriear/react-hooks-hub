import {
  ArrowRight,
  BookOpen,
  Code2,
  GraduationCap,
  Lightbulb,
  Layers,
  CheckCircle2,
  Rocket,
  Atom,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-label">
              <Atom size={16} />
              React Learning Platform
            </span>

            <h1>
              Learn React Hooks.
              <br />
              <span>Build Better Apps.</span>
            </h1>

            <p>
              Welcome to React Hooks Hub! Your learning journey to understanding
              React Hooks starts here. Explore simple explanations, practical
              examples, and step-by-step guides.
            </p>

            <div className="hero-actions">
              <a href="#learning" className="primary-btn">
                Start Learning
                <ArrowRight size={18} />
              </a>

              <a href="#about" className="outline-btn">
                Explore More
              </a>
            </div>

            <div className="hero-note">
              <CheckCircle2 size={17} />
              <span>Beginner Friendly • Learn at Your Own Pace</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-circle circle-one"></div>
            <div className="hero-circle circle-two"></div>

            <div className="hero-icon-card">
              <Atom size={110} strokeWidth={1.3} />
            </div>

            <div className="floating-card floating-top">
              <Code2 size={20} />
              <span>Learn by Coding</span>
            </div>

            <div className="floating-card floating-bottom">
              <BookOpen size={20} />
              <span>Easy Documentation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="about-section" id="about">
        <div className="section-heading">
          <span className="section-label">INTRODUCTION</span>

          <h2>What are React Hooks?</h2>

          <p>
            React Hooks are special functions that allow you to use React
            features like state and other React capabilities inside functional
            components.
          </p>
        </div>

        <div className="about-content">
          <div className="about-card">
            <div className="feature-icon">
              <Layers size={25} />
            </div>

            <h3>Manage State</h3>

            <p>
              Manage component data and update your UI dynamically using React
              Hooks.
            </p>
          </div>

          <div className="about-card">
            <div className="feature-icon">
              <Code2 size={25} />
            </div>

            <h3>Write Cleaner Code</h3>

            <p>
              Organize your component logic and make your React code easier to
              understand.
            </p>
          </div>

          <div className="about-card">
            <div className="feature-icon">
              <Rocket size={25} />
            </div>

            <h3>Build Better Apps</h3>

            <p>
              Create powerful, reusable, and interactive React applications.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Instructions */}
      <section className="learning-section" id="learning">
        <div className="section-heading">
          <span className="section-label">GET STARTED</span>

          <h2>How to Use This Website</h2>

          <p>
            Follow these simple steps to make your React Hooks learning journey
            easier and more effective.
          </p>
        </div>

        <div className="steps-container">
          <div className="step-card">
            <span className="step-number">01</span>

            <div>
              <h3>Choose a Hook</h3>
              <p>
                Select the Hook you want to learn from the navigation or
                learning section.
              </p>
            </div>
          </div>

          <div className="step-card">
            <span className="step-number">02</span>

            <div>
              <h3>Understand the Concept</h3>
              <p>
                Read the introduction, explanation, and syntax of the selected
                Hook.
              </p>
            </div>
          </div>

          <div className="step-card">
            <span className="step-number">03</span>

            <div>
              <h3>Explore Code Examples</h3>
              <p>
                Study the practical examples to understand how each Hook works.
              </p>
            </div>
          </div>

          <div className="step-card">
            <span className="step-number">04</span>

            <div>
              <h3>Practice & Experiment</h3>
              <p>
                Write your own code, experiment with examples, and improve your
                skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Roadmap */}
      <section className="roadmap-section">
        <div className="section-heading">
          <span className="section-label">YOUR JOURNEY</span>

          <h2>Learning Roadmap</h2>

          <p>
            A simple path to help you learn React Hooks from basic concepts to
            advanced techniques.
          </p>
        </div>

        <div className="roadmap-grid">
          <div className="roadmap-card">
            <span className="roadmap-tag">LEVEL 01</span>
            <h3>Fundamentals</h3>
            <p>
              Start with the essential React Hooks and understand how they work.
            </p>
            <span className="roadmap-status">
              <CheckCircle2 size={15} />
              Beginner
            </span>
          </div>

          <div className="roadmap-card">
            <span className="roadmap-tag">LEVEL 02</span>
            <h3>Intermediate</h3>
            <p>
              Learn how to manage shared state, references, and component logic.
            </p>
            <span className="roadmap-status">
              <GraduationCap size={15} />
              Intermediate
            </span>
          </div>

          <div className="roadmap-card">
            <span className="roadmap-tag">LEVEL 03</span>
            <h3>Advanced</h3>
            <p>
              Explore performance optimization and advanced React techniques.
            </p>
            <span className="roadmap-status">
              <Rocket size={15} />
              Advanced
            </span>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="tips-section">
        <div className="tips-content">
          <div className="tips-icon">
            <Lightbulb size={30} />
          </div>

          <div>
            <span className="section-label">LEARNING TIP</span>

            <h2>Don't Just Read. Start Coding!</h2>

            <p>
              The best way to understand React Hooks is by using them in real
              projects. Practice regularly, experiment with code, and learn from
              your mistakes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Start Your React Journey?</h2>

        <p>
          Explore React Hooks, understand their concepts, and become a better
          React developer.
        </p>

        <a href="#learning" className="primary-btn">
          Start Exploring
          <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
};

export default Home;
