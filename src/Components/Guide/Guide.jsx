import { Link } from 'react-router-dom';
import {
  BookOpen,
  Code2,
  Lightbulb,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Play,
  Target,
  GraduationCap,
} from 'lucide-react';

import './Guide.css';

const learningSteps = [
  {
    number: '01',
    icon: BookOpen,
    title: 'Understand the Basics',
    description:
      'Start by understanding what React Hooks are, why they exist, and how they work inside functional components.',
    topics: [
      'What are React Hooks?',
      'Rules of Hooks',
      'Functional Components',
    ],
  },
  {
    number: '02',
    icon: Code2,
    title: 'Learn One Hook at a Time',
    description:
      'Explore each React Hook individually. Understand its purpose, syntax, and practical use cases.',
    topics: ['useState', 'useEffect', 'useContext', 'useRef'],
  },
  {
    number: '03',
    icon: Lightbulb,
    title: 'Practice with Examples',
    description:
      'Try the interactive examples, experiment with code, and understand how each Hook behaves.',
    topics: ['Counter Application', 'Data Fetching', 'Form Handling'],
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Build Real Projects',
    description:
      'Apply your knowledge by building small React projects and combining multiple Hooks.',
    topics: ['Todo App', 'Weather App', 'Shopping Cart'],
  },
];

const tips = [
  'Learn the concept before memorizing the syntax.',
  'Practice coding instead of only reading examples.',
  'Experiment with different values and observe the results.',
  'Read error messages and try to understand them.',
  'Build small projects to strengthen your knowledge.',
];

const Guide = () => {
  return (
    <main className="guide-page">
      {/* Hero */}
      <section className="guide-hero">
        <div className="guide-container">
          <span className="guide-badge">
            <GraduationCap size={16} />
            Learning Guide
          </span>

          <h1>
            Your Journey to
            <br />
            <span>Master React Hooks.</span>
          </h1>

          <p>
            A simple step-by-step roadmap to help you understand, practice, and
            confidently use React Hooks in your projects.
          </p>

          <Link to="/hooks/usestate" className="guide-primary-btn">
            Start Learning
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="guide-intro">
        <div className="guide-container guide-intro-content">
          <div>
            <span className="guide-label">HOW TO GET STARTED</span>

            <h2>
              Learn at your own
              <span> pace.</span>
            </h2>

            <p>
              Learning React Hooks becomes easier when you follow a structured
              approach. Start with the fundamentals, explore individual Hooks,
              practice with examples, and gradually build real-world
              applications.
            </p>
          </div>

          <div className="guide-intro-card">
            <div className="guide-intro-icon">
              <Target size={32} />
            </div>

            <h3>Your Learning Goal</h3>

            <p>
              Understand how React Hooks work and learn when and how to use them
              in your applications.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="guide-roadmap">
        <div className="guide-container">
          <div className="guide-section-heading">
            <span className="guide-label">YOUR ROADMAP</span>

            <h2>
              Four Steps to
              <span> Get Started.</span>
            </h2>

            <p>Follow these steps to build your React Hooks knowledge.</p>
          </div>

          <div className="guide-steps">
            {learningSteps.map(step => {
              const Icon = step.icon;

              return (
                <div className="guide-step-card" key={step.number}>
                  <div className="guide-step-top">
                    <span className="guide-step-number">{step.number}</span>

                    <div className="guide-step-icon">
                      <Icon size={25} />
                    </div>
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                  <div className="guide-topic-list">
                    {step.topics.map(topic => (
                      <div className="guide-topic" key={topic}>
                        <CheckCircle2 size={16} />
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="guide-how">
        <div className="guide-container">
          <div className="guide-section-heading">
            <span className="guide-label">HOW TO USE THIS PLATFORM</span>

            <h2>
              Make the Most of
              <span> React Hooks Hub.</span>
            </h2>
          </div>

          <div className="guide-how-grid">
            <div className="guide-how-card">
              <div className="guide-how-icon">
                <BookOpen size={24} />
              </div>

              <h3>1. Explore Hooks</h3>

              <p>Open the Hooks menu and select the Hook you want to learn.</p>
            </div>

            <div className="guide-how-card">
              <div className="guide-how-icon">
                <Code2 size={24} />
              </div>

              <h3>2. Understand the Code</h3>

              <p>
                Read the explanation, understand the syntax, and study the code
                examples.
              </p>
            </div>

            <div className="guide-how-card">
              <div className="guide-how-icon">
                <Play size={24} />
              </div>

              <h3>3. Try the Examples</h3>

              <p>
                Interact with live demonstrations and see how the Hook works.
              </p>
            </div>

            <div className="guide-how-card">
              <div className="guide-how-icon">
                <Rocket size={24} />
              </div>

              <h3>4. Practice Yourself</h3>

              <p>
                Write your own code and use the Hook in small React projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="guide-tips">
        <div className="guide-container guide-tips-grid">
          <div>
            <span className="guide-label">LEARNING TIPS</span>

            <h2>
              Learn smarter.
              <span> Grow faster.</span>
            </h2>

            <p>
              Keep these simple tips in mind during your React Hooks learning
              journey.
            </p>
          </div>

          <div className="guide-tips-list">
            {tips.map((tip, index) => (
              <div className="guide-tip-item" key={index}>
                <CheckCircle2 size={19} />
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="guide-cta">
        <div className="guide-container">
          <div className="guide-cta-icon">
            <Rocket size={30} />
          </div>

          <h2>Let's Start Learning React Hooks!</h2>

          <p>
            Begin with your first Hook and take one step closer to becoming a
            better React developer.
          </p>

          <Link to="/hooks/usestate" className="guide-primary-btn">
            Explore useState
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Guide;
