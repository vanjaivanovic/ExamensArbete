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
            <section className="first-section">
              <h2 className="first-section-title">Our story</h2>
              <p> På Södermannagatan 42 finns sedan ett tag tillbaka kaféet Waffely You. 
              Inrett med saker från en svunnen tid serverar vi kaffe, våfflor – och helt övergoda 
              och härliga milkshakes. Ett riktigt bra stopp att hänga med vänner och familj. 
              Cause everyone needs a waffle sometimes! </p>
              <ScrollDown />
            </section>

            <section>
              <Gallery />
              <GalleryDesktop />
            </section>

            <section className="second-section">
              <h2 className="second-section-title">Välkommen till vår passion</h2>
              <p>
              Lokalens inredning är trendriktig med barlagda tegelväggar, enkla rottingstolar och en rustik touch.
              På Waffely You är det våfflor som är i fokus. Det är tydligt att vi älskar våfflor. 
              Våfflor är så gott och vi ville visa att man kan äta våfflor fler dagar om året än bara på våffeldagen. 
              Hos oss hittar du frasiga och varma våfflor med riktliga tillbehör. 
              </p>

               <p>
               Waffely You tagit sig tid att utveckla ett riktigt bra våffelrecept.
               Och idag flockas hundratals brunchsugna gäster på Waffely You för att smaska i sig
               godsaker och våra wraffles, en wrap plus våffla, som har blivit caféets signum.
               </p>

               <p>
               På caféet finns det också freakshakes i alla möjliga smaker och utformningar. 
               Där kan du sörpla i dig alltifrån en kaffe och kanelbulleshake till en veganshake. 
               Eller varför inte en med choklad och donuts?
               En milkshake med extra allt -  det finns inga gränser för vad du kan ha i.
               Låt din fantasi flöda och freak out, vi lyssnar och skapar 
               så att du kan imponera på gästerna med freakshakes på Waffely You's vis.
               </p>

               <p>
               Nog talat om våra frasiga varma våfflor och freaky freakshakes.
               Omsorg är också viktigt för oss i det vi tar oss an på.
               Omsorg om gäster, omsorg om inredning, omsorg om våra råvaror, producenter och smaker närmast. 
               Om och om igen påminner vi varandra att omsorg har burit med sig många fina möjligheter 
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
      