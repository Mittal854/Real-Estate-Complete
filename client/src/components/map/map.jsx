import { MapContainer, TileLayer } from 'react-leaflet'
import './map.css'
import "leaflet/dist/leaflet.css";
import Pin from '../pin/pin';

import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Create a custom marker icon
const customMarkerIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIconRetina,
  shadowUrl: markerShadow,
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  tooltipAnchor: [16, -28], // point from which the tooltip should open relative to the iconAnchor
  shadowSize: [41, 41], // size of the shadow
});

// Set the default marker icon to the custom marker icon
L.Marker.prototype.options.icon = customMarkerIcon;

function Map({items}){
  return (
    <MapContainer center={[31.170071, 75.958476]} zoom={7} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map(item=>(
      <Pin item={item} key={item.id}/>
    ))}
  </MapContainer>
  )
}

export default Map

//lalala