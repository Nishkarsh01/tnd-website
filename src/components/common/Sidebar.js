import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import logo from '../img/logo.png';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h1 className={styles.sidebarTitle}>
        THE NEW DEVELOPERS<span>_</span>
      </h1>
      <nav>
        <ul>
          <li><NavLink to="/" exact activeClassName={styles.active}>Home</NavLink></li>
          <li><NavLink to="/events" activeClassName={styles.active}>Events</NavLink></li>
          <li><NavLink to="/opportunities" activeClassName={styles.active}>Opportunities</NavLink></li>
          <li><a href="https://forms.gle/xyz123" target="_blank" rel="noopener noreferrer">Join Our Mailing List</a></li>
          <li><NavLink to="/about" activeClassName={styles.active}>About Us</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
