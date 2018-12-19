import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const LocationAdress = ({ adress }) => <div>
										 <i className="fas fa-map-marker-alt fa-4x"></i>
										 <p className="map-location-adress">{adress}</p>
									   </div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.3414686,
      lng: 18.05221890000007
    },
    zoom: 15
  };
 
  render() {
    return (      
	      // Important! Always set the container height explicitly

        <div className="row">
          <map className="col-12 contact-map">
	      <div style={{ height: '50vh', width: '100%' }}>
	        <GoogleMapReact
	          bootstrapURLKeys={{ key: "AIzaSyBF7QD4tAhSp5JHTH9U6Mgr3lGcUT3qv4w" }}
	          defaultCenter={this.props.center}
	          defaultZoom={this.props.zoom}
	        >
	          <LocationAdress
	            lat={59.3414686}
	            lng={18.05221890000007}
	            adress={''}
	          />
	        </GoogleMapReact>
	      </div>      
	    </map>
      </div>
    );
  }
}
 
export default Map;