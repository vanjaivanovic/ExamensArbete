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
            <section className="offset-1 col-10 first-section">
              <h2 className="first-section-title">Välkommen in</h2>
              <p>
              Välkommen in till vårt kafé och känn doften av våra hembakade bakverk. 
              Vi serverar våfflor & wraffles och andra godsaker.
              </p>
              <p>Alla dagar 09.00-18.00.</p>
              <p>Välkommen in för en stund att njuta av det goda.</p>
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





