/* global google */
import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const MarkersList = props => {
  const { locations, ...markerProps } = props;
  return (
    <span>
      {locations.map((location, i) => {
        return (
          <Marker
            key={i}
            {...markerProps}
            position={{ lat: location.lat(), lng: location.lng() }}
          />
        );
        console.log("lo",position)
        console.log("lo",location.lat)
      })}
    </span>
  );
};

class googleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center:{
        lat: 23.2526, 
        lng: 77.4045
      },
      zoom:4,
      locations: []
    };
    this.handleMapClick = this.handleMapClick.bind(this);
  }

  handleMapClick = (ref, map, ev) => {
    console.log("ev",map.mapUrl)
    console.log("this.props",this.props)
    const location = ev.latLng;
    console.log("location",location)
    this.setState(prevState => ({
      locations: [...prevState.locations, location]
    }));
    map.panTo(location);
  };

  render() {
    console.log("this",this.state.locations)
    return (
      <div className="map-container">
        <Map
          google={this.props.google}
          className={"map"}
          zoom={this.state.zoom}
          initialCenter={this.state.center}
          onClick={this.handleMapClick}
        >
         <MarkersList locations={this.state.locations} icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" />
        </Map>

      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC9ZCM5EXl_YbQFKqxERWiLp-ANWqXKetk",
  libraries: []
})(googleMap);
