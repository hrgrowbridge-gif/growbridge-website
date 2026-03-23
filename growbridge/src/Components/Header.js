import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <h1>GrowBridge</h1>
      <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={isMenuOpen ? 'open' : ''}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;