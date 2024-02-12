import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [sidenav, setSidenav] = useState(false);
  const [sticky, setSticky] = useState(false);
  const menuIcon = <FontAwesomeIcon icon={faBars} />;

  const sidenavShow = () => {
    setSidenav(!sidenav);
  }

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header id="site_header" className={`${sticky ? 'sticky' : ''}`}>
        <div className="container">
          <nav className="navbar" id="Navbar">
            <div className="navbar_brand">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="navbar_toggler" onClick={sidenavShow}>
              {menuIcon}
            </div>
            <div className={`menu_items ${sidenav === true ? 'active' : ''}`}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About US</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact US</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
