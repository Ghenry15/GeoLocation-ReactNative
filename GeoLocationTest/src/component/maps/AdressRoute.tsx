import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
// import { GOOGLE_MAPS_API_KEY } from '@env'
import MapViewDirections from 'react-native-maps-directions'
// const GOOGLE_MAPS_API_KEY= process.env('GOOGLE_MAPS_API_KEY');
const GOOGLE_MAPS_APIKEY = 'AIzaSyByLDoZix49gLzFNTp-6sTQLgHBy8H4qVc';
const AdressRoute = () => {
    const [distanceAndDuration, setDistanceAndDuration] = useState({})
    const routeLines = [
        { latitude: -26.18314695923081, longitude: -58.16450051521059 },
        { latitude: -26.186689983874324, longitude: -58.17562256414176 },
    ]
    return (
        <MapViewDirections
            origin={routeLines[0]}
            destination={routeLines[1]}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={4}
            strokeColor={'#00a4eb'}
            onReady={result => {
                setDistanceAndDuration({
                    km: Math.floor(Math.round(result.distance)),
                    time: Math.floor(Math.round(result.distance))
                })
            }}
        />
    )
}

export default AdressRoute

const styles = StyleSheet.create({})