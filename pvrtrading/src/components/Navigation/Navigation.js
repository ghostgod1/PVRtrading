import React from 'react';
import './Navigation.css';
import logo from '../../images/logo.jpg';

const Navigation = () => {
  return (
<nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span className="logo-text">PVR Financial Services</span>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/contact">Courses</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/courses">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;


/*
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src={logo}
    width="50" height="50" class="d-inline-block align-top" 
    alt="logo" />
    PVR
  </a>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Courses</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>

*/