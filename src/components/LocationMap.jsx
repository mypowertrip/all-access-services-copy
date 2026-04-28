import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers
const defaultIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function LocationMap({ location, zoom = 13 }) {
  // Default coordinates for locations (San Diego, Orange County, Inland Empire, Los Angeles)
  const coords = {
    'San Diego': [32.7157, -117.1611],
    'Orange County': [33.7485, -117.8677],
    'Inland Empire': [34.0522, -117.1186],
    'Los Angeles': [34.0522, -118.2437]
  };

  const position = coords[location.name] || [32.7157, -117.1611];

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={position} icon={defaultIcon}>
        <Popup>{location.name}</Popup>
      </Marker>
    </MapContainer>
  );
}