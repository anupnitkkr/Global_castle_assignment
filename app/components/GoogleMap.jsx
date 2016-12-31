/* global google */
import _ from "lodash";

import {
  default as React,
  Component,
} from "react";


import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onCenterChanged={props.onCenterChanged}
  >
  </GoogleMap>
));

export default class GettingStartedExample extends Component {

  state = {
    
  };

  handleMapLoad = this.handleMapLoad.bind(this);

  handleMapLoad(map) {
    this._mapComponent = map;
    window.global_map_instance = map;
  }

  render() {
    return (
      <div style={{height: `100%`}}>
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          onMapLoad={this.handleMapLoad}
          onCenterChanged={this.props.onCenterChanged}
        />
      </div>
    );
  }
}