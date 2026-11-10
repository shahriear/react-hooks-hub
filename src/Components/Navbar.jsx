

import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hooks', path: '/hooks' },
    { name: 'About', path: '/about' },
    { name: 'Guide', path: '/guide' },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <nav className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <span className="logo-icon">
            <Code2 size={23} />
          </span>

          <span className="logo-text">
            React Hooks Hub<span className="logo-dot">.</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  isActive ? 'nav-link active-link' : 'nav-link'
                }
                onClick={closeMenu}
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          {/* Mobile CTA */}
          <li className="mobile-cta">
            <Link to="/hooks" onClick={closeMenu}>
              Start Learning <ArrowUpRight size={17} />
            </Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <Link to="/hooks" className="nav-button">
          Start Learning
          <ArrowUpRight size={18} />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
