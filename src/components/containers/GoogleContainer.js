import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';





class Google extends React.Component {
  render() {
    const containerStyle = {
      position: 'absolute',
      width: '40%',
      height: '50%'
      }
    return(
      <section style={{marginLeft:'200px'}}>
        <Map
          google={this.props.google} zoom={10}
          containerStyle={containerStyle}
          initialCenter={{
            lat: 51.489843,
            lng:  -0.065793
          }}

          >

          <Marker onClick={this.onMarkerClick}
          name={'Current location'} />

        
        </Map>

      </section>
    )

  }
}







export default GoogleApiWrapper({
  apiKey: ('AIzaSyC46mPfq5Cd4ni2XfuATWWFh5YBUOrM73U')
})(Google)
