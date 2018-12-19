import React, { Component } from 'react';
import Header from '../Header.js';
import Carousel from '../Helpers/Carousel.js';
import '../../Assets/Styles/Home.css';


class Home extends Component {

  render() {
    return (
      <div className="wrapper wrapper-startpage">
        <Header />
        <Carousel />    
     </div>
    )
  }
}

export default Home; 
      