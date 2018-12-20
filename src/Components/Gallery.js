import React, { Component } from 'react'

class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
      <div className="row">
        <div className="col-6 gallery-image gallery-image-left">
          <img src={require('../Assets/Images/flowers.jpg')} alt="flowers with wooden background" />
        </div> 
        <div className="col-6 gallery-image gallery-image-right">
          <img src={require('../Assets/Images/location1.jpg')} alt="inside the café, next to the counter" />
        </div>
      </div>

      <div className="row">
        <div className="col-12 gallery-image gallery-image-large">
          <img src={require('../Assets/Images/dessert.jpg')} alt="differents small desserts" />
        </div>
      </div>

      <div className="row">
        <div className="col-6 gallery-image gallery-image-left">
          <img src={require('../Assets/Images/bread.jpg')} alt="bread on the table at a café" />
        </div>
        <div className="col-6 gallery-image gallery-image-right">
          <img src={require('../Assets/Images/cake.jpg')} alt="coffe with chocolate cake" />
        </div>
      </div>

      </div>


    )
  }
}

export default Gallery;