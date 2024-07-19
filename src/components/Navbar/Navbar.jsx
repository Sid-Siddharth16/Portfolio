import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className="nav-menu">
        <li>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>About Me</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li>
          <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
