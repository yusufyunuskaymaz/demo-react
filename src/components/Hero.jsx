import React from "react";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import GoogleMapReact from 'google-map-react';
import  {mapStyle}  from "./mapStyle";


const AnyReactComponent = ({ text }) => <div id="map-cluster">{text}</div>;

export default function SimpleMap(){
  

  const coordinates = Array.from({ length: 30 }, () => [
    +(41.035 + Math.random() / 100).toFixed(3),
    +(28.969 + Math.random() / 100).toFixed(3),
  ]);

  // Her koordinat için bir <AnyReactComponent /> bileşeni oluşturuluyor
  const markers = coordinates.map(([lat, lng],index) => (
    <AnyReactComponent key={index+1} lat={lat} lng={lng} text={`$${Math.floor(Math.random() * 100)}`} style={{margin: '10px'}}/>
  ));
  console.log(markers,"markers")
  const defaultProps = {
    center: {
      lat: markers[0].props.lat,
      lng: markers[0].props.lng
    },
    zoom: 14
  };

  return (
    // Important! Always set the container height explicitly
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDOEdAxLCO_LhNDMT-7TGQxXWYpME9UtOE" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{ styles: mapStyle }} // styles özelliği bir dizi olarak tanımlanmalıdır

      >
        {markers}
        
      </GoogleMapReact>
    </div>
  );
}