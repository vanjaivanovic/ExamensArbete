import React, { Component } from 'react';
import Header from '../Header.js';
import ScrollDown from '../Helpers/ScrollDown.js';
import Footer from '../Footer.js';
import MenuGallery from '../MenuGallery.js';
import MenuGalleryDesktop from '../MenuGalleryDesktop.js';
import '../../Assets/Styles/Menu.css';




class Menu extends Component {
 
  render() {
    return (
      <div className="wrapper">
        <Header headerImage = "menu-header-image" heroTitle = "meny" />

         <div className="container">
          <main>
            <section className="first-section">
              <h2 className="first-section-title">Älskade råvaror</h2>
              <p>
              Waffely You serverar frasiga och varma våfflor med rikligt med tillbehör. 
              Här snålas det inte!
              </p>
              <ScrollDown />
            </section>
            <MenuGallery />   
            <MenuGalleryDesktop />        
          </main>
        </div>
          
          <Footer />
        </div>
    )
  }
}

export default Menu; 
      