import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='head'>
      <div className="logo">
        <span  className='react'>ReactQuest</span>
      </div>
      <button className="burger-menu" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={isMenuOpen ? 'open' : ''}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/newcalcul" onClick={() => setIsMenuOpen(false)}>Calculator</Link>
        <Link to="/profils" onClick={() => setIsMenuOpen(false)}>Profils List</Link>
        <Link to="/api" onClick={() => setIsMenuOpen(false)}>API-Country</Link>
        <Link to="/todolist" onClick={() => setIsMenuOpen(false)}>To-Do List</Link>
        <Link to="/compo1" onClick={() => setIsMenuOpen(false)}>CC1</Link>
      </nav>
    </header>
  );
}
