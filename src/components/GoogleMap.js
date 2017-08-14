import React, { Component } from "react";

class GoogleMap extends Component {
  componentDidMount() {

    // new google.maps.Map(this.refs.map, {
    //   zoom: 12,
    //   center: {
    //     lat: this.props.lat,
    //     lng: this.props.lon
    //   }
    // });

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 38.397, lng: 100.644},
      zoom: 5
    });
  }

  render() {
    return <div id="map" ref="map" />;
  }
}

export default GoogleMap;