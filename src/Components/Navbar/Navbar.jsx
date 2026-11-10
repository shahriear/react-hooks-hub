import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Code2, ChevronDown } from 'lucide-react';

import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hooksOpen, setHooksOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Guide', path: '/guide' },
  ];

  const hooks = [
    { name: 'useState', path: '/hooks/usestate' },
    { name: 'useEffect', path: '/hooks/useeffect' },
    { name: 'useContext', path: '/hooks/usecontext' },
    { name: 'useRef', path: '/hooks/useref' },
    { name: 'useMemo', path: '/hooks/usememo' },
    { name: 'useCallback', path: '/hooks/usecallback' },
    { name: 'useReducer', path: '/hooks/usereducer' },
    { name: 'useId', path: '/hooks/useid' },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
    setHooksOpen(false);
  };

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
          {navLinks.slice(0, 1).map(link => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active-link' : 'nav-link'
                }
                onClick={closeMenu}
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          {/* Hooks Dropdown */}
          <li
            className={`nav-dropdown ${hooksOpen ? 'dropdown-open' : ''}`}
            onMouseEnter={() => setHooksOpen(true)}
            onMouseLeave={() => setHooksOpen(false)}
          >
            <button
              className="nav-link dropdown-toggle"
              onClick={() => setHooksOpen(!hooksOpen)}
              aria-expanded={hooksOpen}
            >
              Hooks
              <ChevronDown size={16} />
            </button>

            <ul className="dropdown-menu">
              {hooks.map(hook => (
                <li key={hook.name}>
                  <NavLink
                    to={hook.path}
                    className={({ isActive }) =>
                      isActive ? 'dropdown-link active-link' : 'dropdown-link'
                    }
                    onClick={closeMenu}
                  >
                    {hook.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          {/* Other Links */}
          {navLinks.slice(1).map(link => (
            <li key={link.name}>
              <NavLink
                to={link.path}
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
        {/* <Link to="/hooks" className="nav-button">
          Start Learning
          <ArrowUpRight size={18} />
        </Link> */}

        {/* Mobile Toggle */}
        <button
          className="menu-toggle"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setHooksOpen(false);
          }}
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
