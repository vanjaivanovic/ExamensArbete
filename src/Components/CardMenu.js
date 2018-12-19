import React, { Component } from 'react';
import FoodMenu from '../Assets/JSON/FoodMenu.json';

class CardMenu extends Component{
  constructor(props){
    super(props);
  }

  componentWillMount() {
    const { menuIndex, menuMainTitle } = this.props;

    this.setState({
      foodMenu: FoodMenu.FoodMenus[menuIndex],
      mainTitle: menuMainTitle
    })
  }

  render() {

    const { closeMenu } = this.props;

    return (

      <div className="container">
        <div className="row">
          <div className="col-12 slide-in-elliptic-top-fwd menu-card">
            <h2 className="menu-main-title">{this.state.mainTitle}</h2>

            {this.state.foodMenu.map((menu, index) => {
               return (
                <div className="menu-content" onClick = {closeMenu}>
                  <h3 className="menu-title">{menu.title}</h3>
                  <p className="menu-price">{menu.price}</p>
                </div>
                )
           })}
          </div>
        </div>
      </div>

      )
  }
} 

export default CardMenu;

