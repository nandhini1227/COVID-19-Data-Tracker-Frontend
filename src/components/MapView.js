import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapView = ({ countryData }) => {
    return (
        <MapContainer center={[20, 0]} zoom={2} style={{ height: '600px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {countryData.map((country, index) => (
                <Marker key={index} position={[country.lat, country.lng]}>
                    <Popup>
                        {country.name}: {country.cases} cases
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapView;
