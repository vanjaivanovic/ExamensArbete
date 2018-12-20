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
            <section className="offset-1 col-10 first-section">
              <h2 className="first-section-title">Älskade råvaror</h2>
              <p>
              Waffely You serverar frasiga och varma våfflor med smaskiga tillbehör. 
              Vi serverar både söta men även matigare frukost- och lunchvåfflor. 
              På caféet finns det också freakshakes i alla möjliga smaker och utformningar.
              Hos oss kan du sörpla i dig alltifrån en kaffe och kanelbulleshake till en veganshake.
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
      