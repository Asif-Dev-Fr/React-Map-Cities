import React from 'react';
import styled from 'styled-components';

import {Map, Marker, TileLayer} from 'react-leaflet';
import { Icon } from "leaflet";

const MapContainer = styled.div`
    height: 600px;
    width: 850px;
    margin: 15px auto;
`

const MapCities = (props) => {

    return(
        <MapContainer>
            <Map center={[props.lat, props.lon]} zoom={props.zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[props.lat, props.lon]} />
            </Map>
        </MapContainer>
    )

}

export default MapCities;