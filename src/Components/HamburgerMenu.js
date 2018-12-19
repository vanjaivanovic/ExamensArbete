import React, { Component } from 'react';
import '../Assets/Styles/HamburgerMenu.css';

class Navigation extends Component {
  render() {
    return (
      <nav role="navigation">
      <div id="menu-toggle">
        <input type="checkbox" />
       
        <span></span>
        <span></span>
        <span></span>
        
        <ul id="menu">
          <a href="/"><li>Hem</li></a>
          <a href="/Menu"><li>Meny</li></a>
          <a href="/About"><li>Om oss</li></a>
          <a href="/Contact"><li>Kontakt</li></a>
        </ul>
      </div>
    </nav>

      )
  }
}

export default Navigation;

