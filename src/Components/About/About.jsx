import { Link } from 'react-router-dom';
import {
  Code2,
  Target,
  BookOpen,
  Lightbulb,
  Rocket,
  CheckCircle2,
  ArrowUpRight,
  GraduationCap,
  Code,
  Laptop,
} from 'lucide-react';

import '../About/About.css';

const features = [
  {
    icon: BookOpen,
    title: 'Easy Explanations',
    description:
      'Understand React Hooks with simple explanations and beginner-friendly examples.',
  },
  {
    icon: Code,
    title: 'Practical Examples',
    description:
      'Learn by exploring real code examples and practicing what you learn.',
  },
  {
    icon: Laptop,
    title: 'Live Demos',
    description:
      'Experiment with interactive examples and see how React Hooks work.',
  },
  {
    icon: GraduationCap,
    title: 'Beginner Friendly',
    description:
      'Start from the basics and gradually improve your React development skills.',
  },
];

const topics = [
  'Understanding React Hooks',
  'Managing Component State',
  'Handling Side Effects',
  'Sharing Data with Context',
  'Working with References',
  'Optimizing React Performance',
];

const About = () => {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-container">
          <span className="about-badge">
            <Code2 size={16} />
            About React Hooks Hub
          </span>

          <h1>
            Learn React Hooks.
            <br />
            <span>Build Better Applications.</span>
          </h1>

          <p>
            A learning platform designed to help developers understand React
            Hooks through simple explanations, practical examples, and
            interactive demonstrations.
          </p>

          <div className="about-hero-buttons">
            <Link to="/hooks" className="about-primary-btn">
              Explore Hooks
              <ArrowUpRight size={18} />
            </Link>

            <Link to="/guide" className="about-secondary-btn">
              Learning Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="about-section">
        <div className="about-container intro-grid">
          <div className="intro-content">
            <span className="section-label">WHO WE ARE</span>

            <h2>
              Making React Hooks
              <span> easier to understand.</span>
            </h2>

            <p>
              React Hooks Hub is a dedicated learning platform focused on
              helping developers understand and use React Hooks effectively.
            </p>

            <p>
              Whether you are just starting with React or looking to strengthen
              your existing knowledge, this platform provides a simple way to
              explore different Hooks and understand how they work.
            </p>
          </div>

          <div className="intro-visual">
            <div className="visual-icon">
              <Code2 size={65} />
            </div>

            <h3>Learn. Practice. Build.</h3>

            <p>Your journey to understanding React Hooks starts here.</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section">
        <div className="about-container mission-content">
          <div className="mission-icon">
            <Target size={30} />
          </div>

          <span className="section-label">OUR MISSION</span>

          <h2>
            Making React learning
            <span> simple and accessible.</span>
          </h2>

          <p>
            Our mission is to make learning React Hooks easier for everyone by
            providing clear explanations, useful examples, and practical
            learning experiences.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="about-section">
        <div className="about-container">
          <div className="section-heading">
            <span className="section-label">WHY CHOOSE US</span>

            <h2>
              A better way to <span>learn React.</span>
            </h2>

            <p>
              Everything you need to build a strong understanding of React
              Hooks.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div className="feature-card" key={index}>
                  <div className="feature-icon">
                    <Icon size={25} />
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Topics */}
      <section className="topics-section">
        <div className="about-container topics-grid">
          <div className="topics-content">
            <span className="section-label">WHAT YOU'LL LEARN</span>

            <h2>
              Explore the world of
              <span> React Hooks.</span>
            </h2>

            <p>
              Discover important React concepts and learn how to use different
              Hooks in your applications.
            </p>

            <Link to="/hooks" className="topics-link">
              Explore All Hooks
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="topics-list">
            {topics.map((topic, index) => (
              <div className="topic-item" key={index}>
                <CheckCircle2 size={19} />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="about-section">
        <div className="about-container journey-content">
          <div className="journey-icon">
            <Lightbulb size={28} />
          </div>

          <span className="section-label">YOUR LEARNING JOURNEY</span>

          <h2>
            Start small. Learn consistently.
            <span> Grow confidently.</span>
          </h2>

          <p>
            Explore one Hook at a time, understand its purpose, practice with
            examples, and apply your knowledge to real React projects.
          </p>

          <div className="journey-steps">
            <div>
              <span>01</span>
              <h3>Learn</h3>
              <p>Understand the concept.</p>
            </div>

            <div>
              <span>02</span>
              <h3>Practice</h3>
              <p>Try interactive examples.</p>
            </div>

            <div>
              <span>03</span>
              <h3>Build</h3>
              <p>Apply what you learned.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-container">
          <div className="cta-icon">
            <Rocket size={30} />
          </div>

          <h2>Ready to Start Learning?</h2>

          <p>
            Take your first step towards mastering React Hooks. Explore,
            practice, and build something amazing.
          </p>

          <Link to="/hooks" className="about-primary-btn">
            Start Learning
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
