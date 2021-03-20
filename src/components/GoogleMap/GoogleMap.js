import React from 'react'
import GoogleMapReact from 'google-map-react';
function GoogleMap() {       
      const LocationPin = ({ text }) => (
        <div className="pin">
          {/* <Icon icon={locationIcon} className="pin-icon" /> */}
          <p className="pin-text">{text}</p>
        </div>
      )
      const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
      }     
    return (
        <div>
        <h2 className="map-h2">Welcome our Bangla Ride </h2>

        <div className="google-map" style={{height:'500px'}}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAJSM-l7HfL0zZYmpuWNEVpbWOfpWPeYMk' }}
            defaultCenter={location}
            defaultZoom={17}
          >
            <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            />
          </GoogleMapReact>
        </div>
      </div>
    )
}

export default GoogleMap
