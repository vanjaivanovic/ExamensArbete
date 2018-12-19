import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { sliderTitle, cardTitle, cardText } = this.props;
    return (

      <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <i className="fas fa-heart fa-6x"><p className="carousel-title">{sliderTitle}</p></i>
                  </div>
                  <div className="flip-card-back">
                    <h1>{cardTitle}</h1> 
                    <p>{cardText}</p> 
                  </div>
                </div>
              </div>

      )
  }
}

export default Card;