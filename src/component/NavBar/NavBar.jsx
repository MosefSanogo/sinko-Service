import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './navBar.css'
import { NavLink } from 'react-router-dom';
function NavBar({refs}) {
  const [scrolled, setScrolled] = useState(false);
  const[open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
      const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className={"navbar" + (scrolled ? " scrolled" : "")}>
        <div className="navbar__logo">
            <a href="/">Sinko Services</a>
        </div>
        <div className="nav_main">
          <div className={`navbar__toggle ${open ? "active" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`navbar__links ${open ? "active" : ""}`}>
            <li><NavLink to='/'  onClick={() => {handleScroll(refs.home), setOpen(false)}}>Accueil</NavLink></li>
            <li><NavLink to='/immobilier' onClick={() => {handleScroll(refs.skill), setOpen(false)}}>Immobilier</NavLink></li>
            <li><NavLink to='/nettoyage' onClick={() => {handleScroll(refs.project), setOpen(false)}}>Nettoyage</NavLink></li>
            <li><NavLink to='/prestation' onClick={() => {handleScroll(refs.formation), setOpen(false)}}>Prestation</NavLink></li>
            <li><NavLink onClick={() => {handleScroll(refs.contact), setOpen(false)}}>Contact</NavLink></li>
          </ul>
        </div>
    </nav>

  )
}

export default NavBar
