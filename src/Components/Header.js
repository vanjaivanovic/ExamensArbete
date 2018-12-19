import React, { Component } from 'react';
import Navigation from './HamburgerMenu.js';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { headerImage, heroTitle } = this.props;

    return (
      <header id={headerImage} className="hero-image">
        <Navigation />
        <div className="hero-text">
          <h1 className="hero-title">
          {heroTitle}
          </h1>
        </div>
      </header>

      )
  }
}

export default Header;