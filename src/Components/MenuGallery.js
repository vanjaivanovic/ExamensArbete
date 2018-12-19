import React, { Component } from 'react';
import CardMenu from './CardMenu.js';

class MenuGallery extends Component {
  constructor(props){
    super(props);

    this.state = {
      cardMenu: false,
      menuIndex: 0
    }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this); 
  }

  showMenu(index, mainTitle) {
    console.log(index);
    this.setState({
      cardMenu: true,
      menuIndex: index,
      menuMainTitle: mainTitle
    }) 
  }

  closeMenu(){
    this.setState({
      cardMenu: false
    })
  }
  render() {
    let cardMenu = "";

    if(this.state.cardMenu){
      cardMenu = <CardMenu  menuIndex = {this.state.menuIndex} menuMainTitle = {this.state.menuMainTitle} closeMenu = {this.closeMenu} />;
    }

    return (
      <div className="menuGallery">
        <div className="row">
          <div className="col-6 gallery-image gallery-image-left" onClick={() => this.showMenu(0, "Milkshakes")}>
            <img src={require('../Assets/Images/milkshakes.jpg')} alt="three milkshakes on top of a table" />
            <p className="menu-gallery-title">Milkshakes</p>
          </div>
          <div className="col-6 gallery-image gallery-image-right" onClick={() => this.showMenu(1, "Wraffles")}>
            <img src={require('../Assets/Images/wraffle.jpg')} alt="plates with waffles" />
            <p className="menu-gallery-title">Wraffles</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 gallery-image gallery-image-large" onClick={() => this.showMenu(2, "Våfflor")}>
            <img src={require('../Assets/Images/waffle.jpg')} alt="waffle with chocolate and strawberry" />
            <p className="menu-gallery-title menu-gallery-title-large">Våfflor</p>
          </div>
        </div>

        <div className="row">
          <div className="col-6 gallery-image gallery-image-left" onClick={() => this.showMenu(3, "Dryck")}>
            <img src={require('../Assets/Images/coffee.jpg')} alt="three coffes on a line" />
            <p className="menu-gallery-title">Dryck</p>
          </div>
          <div className="col-6 gallery-image gallery-image-right" onClick={() => this.showMenu(4, "Bakverk")}>
            <img src={require('../Assets/Images/whiteCake.jpg')} alt="white cake decorated with pink flowers" />
            <p className="menu-gallery-title">Bakverk</p>
          </div>
        </div>

        {cardMenu}

      </div>

      )
  }
}

export default MenuGallery;