import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const myIcon = L.icon({
  iconUrl: "/images/marker.png",
  iconSize: [38, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

function Map() {
  const markerPosition = [33.598590, 73.155165];

  return (
    <MapContainer
      className="flex items-center justify-center mb-10"
      style={{ width: '1200px', height: '800px' }}
      center={markerPosition}
      zoom={17}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={markerPosition} icon={myIcon}>
        <Popup>{"Hi! we are here. "}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;