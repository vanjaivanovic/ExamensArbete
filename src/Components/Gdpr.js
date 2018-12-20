import React, { Component } from 'react';
import Footer from './Footer.js';
import Header from './Header.js';

import '../Assets/Styles/Gdpr.css';


class GDPR extends Component {

  render() {
    return (
      
      <div className="wrapper">
        <Header headerImage = "gdpr-header-image" heroTitle=""/>
        
        <div className="container">
          <main>
            <section className="offset-1 col-10 first-section">
              <h2 className="first-section-title">Dataskyddspolicy</h2>
              <p>
               På denna sida beskriver vi hur vi hanterar personuppgifter.
               Allt för att du ska känna dig trygg med vad vi samlar in och sparar. 
               Självklart kan du använda vår webbplats utan att lämna personuppgifter.
              </p>
            </section>
              
            <section className="offset-1 col-10 second-section terms-conditions-content">
              <h2 className="second-section-title">Hantering av personuppgifter</h2>
              <p>
              När du tar kontakt med oss Waffely You behöver vi behandla dina personuppgifter.
              Men vi vill att du ska veta att vi värnar om din personliga integritet. 
              Det är viktigt för oss att du har förtroende att låta oss behandla och spara dina personuppgifter
              och vi vill att du ska veta att vi gör det på ett lagligt, säkert och pålitligt sätt. 
              </p>

              <br/>
              <br/>
              <br/>

              <h3>Vad menas med behandling av personuppgifter?</h3>
               <p>
               Det innebär att i kontaktformuläret på websidan samlar vi in dina personuppgifter som du
               skriver ner, som namn och emailadress. Du kan alltid kontakta oss vid frågor 
               kring integritets- och dataskydd genom att skicka ett mail till oss
               eller direkt komma i kontakt med dataskyddsombudet vid övriga frågor
               på datainspektionen@datainspektionen.se.</p>
 
              <p>Genom att använda Waffle You’s kontakttjänst på websidan, 
              accepterar du vår Dataskyddspolicy och Waffle You’s behandling av dina personuppgifter. 
              Du godkänner också att vi använder oss utav elektroniska kommunikationskanaler för 
              att skicka information eller svar till dig, såsom till den e-postadress du angivit.
              </p>

              <br/>

              <h4>Varför samlar vi in dina personuppgifter och har vi rätt att göra det?</h4>
              <p>
              Vi behandlar dina personuppgifter i enlighet med PDL och Dataskyddsförordningen (”GDPR”).
              Den information du lämnat till oss i webbformuläret sparas i 60 dagar, 
              därefter autoraderas informationen.
              </p>
            </section>


          </main>
        </div>
          
          <Footer />
        </div>

      )
  }
}

export default GDPR;