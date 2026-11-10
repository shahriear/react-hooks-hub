import { Link } from 'react-router-dom';
import { Code2, ArrowUpRight, Heart } from 'lucide-react';
import '../Footer/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Main Content */}
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-icon">
                <Code2 size={23} />
              </span>

              <span>
                React Hooks Hub<span className="footer-dot">.</span>
              </span>
            </Link>

            <p className="footer-description">
              Learn React Hooks step by step with simple explanations, practical
              examples, and hands-on learning.
            </p>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="footer-social"
              aria-label="GitHub"
            >
              <Code2 size={19} />
            </a>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/hooks">Explore Hooks</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/guide">Learning Guide</Link>
              </li>
            </ul>
          </div>

          {/* React Resources */}
          <div className="footer-column">
            <h3>Resources</h3>

            <ul>
              <li>
                <a
                  href="https://react.dev/learn"
                  target="_blank"
                  rel="noreferrer"
                >
                  React Learn <ArrowUpRight size={14} />
                </a>
              </li>

              <li>
                <a
                  href="https://react.dev/reference/react"
                  target="_blank"
                  rel="noreferrer"
                >
                  React Reference <ArrowUpRight size={14} />
                </a>
              </li>

              <li>
                <a
                  href="https://react.dev/blog"
                  target="_blank"
                  rel="noreferrer"
                >
                  React Blog <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Learning */}
          <div className="footer-column">
            <h3>Get Started</h3>

            <p className="footer-column-text">
              Ready to improve your React skills? Start exploring React Hooks
              today.
            </p>

            <Link to="/hooks" className="footer-cta">
              Start Learning
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {currentYear} React Hooks Hub. All rights reserved.</p>

          <p className="footer-credit">
            Made with <Heart size={15} fill="currentColor" /> by Shahriear
            Shuvo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
