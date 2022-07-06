import styles from './index.module.css';
import Breadcrumb from "../Breadcrumb";
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.js'
import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet';

const center = {lat: -26.48, lng: -26.48}

export default function Map() {
    const position = [51.505, -0.09]

    function marker(){
        // @ts-ignore
        return <Marker position={position}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    }

    return (
        // @ts-ignore
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {marker}
        </MapContainer>
    );
}
