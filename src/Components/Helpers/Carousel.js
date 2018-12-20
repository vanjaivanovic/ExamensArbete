import React, { Component } from "react";
import Card from './Card.js';

class Carousel extends Component {
  render() {
    return(
      <div>
         
        <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="false">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="item active">
              <Card sliderTitle="Passion" cardTitle="Passion" cardText="Vad är en våffla utan kärlek? På Waffely You vill vi att allting ska kännas så hemmakärt som möjligt. Därför lägger vi mycket kärlek och omsorg i allt vi gör."/>
            </div>

            <div className="item">
               <Card sliderTitle="Råvaror" cardTitle="Råvaror" cardText="Råvaror enligt tiden, råvaror för miljön. Årsäsongerna visar vägen och vi bakar och skapar utifrån vad skörden kan ge oss. Våra råvaror är fyllda med möjligheter och resultaten är alltid smaskiga, därför älskar vi det vi gör."/>
            </div>
          
            <div className="item">
               <Card sliderTitle="Meny" cardTitle="Meny" cardText="Waffely You är en plats för vänner och familj. Låt våra ljuvliga, hembakade bakverk charma era sinnen. Även barnen kommer att älska det! Det lovar vi."/>
            </div>
          </div>
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
     </div>
    )
  }
}

export default Carousel;

