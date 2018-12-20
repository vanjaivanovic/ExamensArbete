import React, { Component } from 'react';

class GalleryDesktop extends Component {

  render() {
    return (
      <div className="gallery-desktop">
        <div className="row">
          <div className="col-3 gallery-image-desktop">
            <img src={require('../Assets/Images/flowers.jpg')} alt="flowers with wooden background" />
          </div> 
          <div className="col-6 gallery-image-desktop gallery-image-desktop-large">
            <img src={require('../Assets/Images/dessert.jpg')} alt="differents small desserts" />
          </div>
          <div className="col-3 gallery-image-desktop gallery-image-margin-right">
            <img src={require('../Assets/Images/location1.jpg')} alt="inside the café, next to the counter" />
          </div>
        </div>

        <div className="row gallery-second-section">
          <div className="col-3 gallery-image-desktop">
            <img src={require('../Assets/Images/bread.jpg')} alt="bread on the table at a café" />
          </div>
          <div className="offset-6 col-3 gallery-image-desktop gallery-image-margin-right">
            <img src={require('../Assets/Images/cake.jpg')} alt="coffe with chocolate cake" />
          </div>
        </div>
      </div>
    )
  }
}

export default GalleryDesktop;