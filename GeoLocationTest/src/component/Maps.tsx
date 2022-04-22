import { NavigationProp } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack'
import React, { useEffect, useRef } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from './LoadingScreen';
import { FabIcon } from './buttons/FabIcon';



export const Maps = () => {
    const { hasLocation, initialPosition, locationError, getCurrentLocation } = useLocation();
    const mapViewRef = useRef<MapView>();
    console.log(initialPosition)

    const handlePositionInitial = async () => {
        const location = await getCurrentLocation();
        mapViewRef.current?.animateCamera({
            center: location
        })
    }

    if (!hasLocation) return (
        <View>
            <Text>Obteniendo Ubicación</Text>
            <LoadingScreen />
        </View>
    )
    //-26.191410670570185, -58.16893117375671
    return (
        <>
            <MapView
                ref={(element) => mapViewRef.current = element!}
                style={{ flex: 1 }}
                showsUserLocation
                initialRegion={{
                    latitude: initialPosition.latitude,
                    longitude: initialPosition.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    image={require('../assets/icon/markerLogo.png')}
                    key={1}
                    coordinate={{
                        latitude: initialPosition.latitude,
                        longitude: initialPosition.longitude,
                    }}
                    title={'Tu ubicacion'}
                    description={'Ubicacion actual'}
                />
            </MapView>
            <FabIcon nameIcon='compass-outline' onPress={handlePositionInitial} style={{ position: 'absolute', bottom: 10, right: 10 }} />
        </>
    )
}


const styles = StyleSheet.create({
    container: { flex: 1 }
})