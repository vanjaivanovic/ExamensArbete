import React, { Component } from 'react';
import Footer from '../Footer.js';
import ScrollDown from '../Helpers/ScrollDown.js';
import ContactForm from '../Form/ContactForm.js';
import Header from '../Header.js';
import Map from '../Helpers/Map.js';
import '../../Assets/Styles/Contact.css';

class Contact extends Component {

  render() {
    return (
      
      <div className="wrapper">
        <Header headerImage = "contact-header-image" heroTitle="Kontakt"/>
        
        <div className="container">
          <main>
            <section className="first-section">
              <h2 className="first-section-title">Välkommen in</h2>
              <p>
              Välkommen in till ett retro kafé och känn doften av hembakat. 
              Vi serverar frukost,brunch,husmanskost våfflor & wraffles alla dagar från 09.00-18.00.
              Nostalgi lovas.
              </p>
              <ScrollDown />
            </section>
              
            <Map />
            <ContactForm />

          </main>
        </div>
          
          <Footer />
        </div>

      )
  }
}

export default Contact;





