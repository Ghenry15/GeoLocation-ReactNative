import { NavigationProp } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack'
import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';

export const Maps = () => {
    //-26.191410670570185, -58.16893117375671
    return (
        <>
            <MapView
                style={{ flex: 1 }}
                showsUserLocation
                initialRegion={{
                    latitude: -26.191410670570185,
                    longitude: -58.16893117375671,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    image={require('../assets/icon/markerLogo.png')}
                    key={1}
                    coordinate={{
                        latitude: -26.191410670570185,
                        longitude: -58.16893117375671,
                    }}
                    title={'Tu ubicacion'}
                    description={'Ubicacion actual'}
                />
            </MapView>
        </>
    )
}


const styles = StyleSheet.create({
    container: { flex: 1 }
})