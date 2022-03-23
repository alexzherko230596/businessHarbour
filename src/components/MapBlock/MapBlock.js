import React, {Component} from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './MapBlock.css'
import '../../index.css'

export class MapBlock extends Component {
    render() {
      return (
       <div style = {{width: '100%', height: '450px', position: 'relative'}} id = 'BlockToScrollGoogleMap'>
            <Map 
                initialCenter={{
                    lat: 52.174130,
                    lng: 21.003270
                }}
                zoomControl = {false}
                scaleControl = {true}
                panControl = {true}
                rotateControl={false}
                className = 'styleGoogleMap'
                google={this.props.google} zoom={14}>
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
                <InfoWindow onClose={this.onInfoWindowClose}/>
            </Map>
            <div className="wrapperMapDescr">
                <div className="textMapDescr mainTextMap">Contacts</div>
                <div className="styleWrapperTextMap">
                  <div className="textMapDescr">+44 599 333 222</div>
                  <div className="textMapDescr">biuro@pbcwp.pl</div>
                  <div className="textMapDescr">02-697 Warszawa ul. Rzymowskiego 28</div>
                </div>
            </div>
       </div>
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: ('AIzaSyAg2j_ykhSmp1uHwfd02EnNh8OZgWJLo2E')
  })(MapBlock)