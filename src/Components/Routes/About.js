import React, { Component } from 'react';
import ScrollDown from '../Helpers/ScrollDown.js';
import Header from '../Header.js';
import Footer from '../Footer.js';
import Gallery from '../Gallery.js';
import GalleryDesktop from '../GalleryDesktop.js';
import '../../Assets/Styles/About.css';

class About extends Component {
  render() {
    return (
     
      <div className="wrapper">
        <Header headerImage = "about-header-image" heroTitle = "Om oss"/>
      
        <div className="container">
          <main>
            <section className="offset-1 col-10 first-section">
              <h2 className="first-section-title">Waffely You</h2>
              <p> På Norrtullsgatan 5 finns sedan ett tag tillbaka ett kafée som heter Waffely You. 
              Här serverar vi våfflor, wraffles, andra hembakade bakverk och helt övergoda 
              och härliga freaky milkshakes. Här kan ni njuta med vänner och familj. 
              Cause everyone needs a waffle sometimes! </p>
              <ScrollDown />
            </section>

            <section>
              <Gallery />
              <GalleryDesktop />
            </section>

            <section className="offset-1 col-10 second-section">
              <h2 className="second-section-title">Välkommen till vår passion</h2>
              <p>
              Lokalens inredning är trendriktig med barlagda tegelväggar, enkla rottingstolar och en rustik touch.
              På Waffely You är det våfflor som är i fokus. Det är tydligt att vi älskar våfflor. 
              Det är så gott med våfflor och därför ville vi visa att man kan äta våfflor fler dagar om året än bara på våffeldagen. 
              Hos oss hittar du frasiga och varma våfflor med underbara tillbehör. 
              </p>

               <p>
               Vi har tagit oss tid att utveckla ett riktigt bra våffelrecept.
               Idag samlas hundratals stamgäster men även nya gäster hos oss för att smaska i sig
               godsaker och våra wraffles, en wrap plus våffla, som har blivit caféets signum.
               </p>

               <p>
               På caféet finns det också freakshakes i alla möjliga smaker och utformningar. 
               Här kan du sörpla i dig alltifrån en kaffe och kanelbulleshake till en veganshake. 
               Eller varför inte en med choklad och donut?
               En milkshake med extra allt -  det finns inga gränser för vad du kan ha i.
               Låt din fantasi flöda och freak out, vi lyssnar och skapar åt dig 
               freakshakes som behagar dina smaker.
               </p>

               <p>
               Nog talat om våra frasiga varma våfflor och freaky freakshakes.
               Omsorg är också viktig för oss i det vi gör och brinner för.
               Vi är måna om våra gäster och våra råvaror. 
               Vi påminner varandra om att vår omsorg i allt i gör har har gett oss många fantastiska möjligheter 
               och för det fortsätter vi att säga tack!
               </p>
            </section>

            
          </main>
        </div>
          
          <Footer />
        </div>

    )
  }
}

export default About; 
      