import React, { Component } from 'react';
import Navigation from './HamburgerMenu.js';

class Header extends Component {

  render() {
    const { headerImage, heroTitle } = this.props;

    return (
      <header id={headerImage} className="hero-image">
        <Navigation />
        <a href="/" className="cafe-title-link"><h1 className="cafe-title">Waffely You</h1></a>

        <div className="hero-text">
          <h2 className="hero-title">
          {heroTitle}
          </h2>
        </div>
      </header>

      )
  }
}

export default Header;