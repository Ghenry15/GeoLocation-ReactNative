import { NavigationProp } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack'
import React, { useEffect, useRef, useState } from 'react'
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useLocation } from '../../hooks/useLocation';
import { LoadingScreen } from '../LoadingScreen';
import { FabIcon } from '../buttons/FabIcon';
import CardPin from './CardPin';
import AdressRoute from './AdressRoute';
import { palette } from '../../styles/palette';

const { height, width } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUD_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const Maps = () => {
    const {
        hasLocation,
        initialPosition,
        getCurrentLocation,
        userLocation,
        getLocationRealTimeUser,
        stopRealTimeUserLocation,
        routeLines,
        locationError } = useLocation();

    const mapViewRef = useRef<MapView>();
    const following = useRef<boolean>(true);
    const [positionUser, setPositionUser] = useState();


    useEffect(() => {
        getLocationRealTimeUser();
        return () => {
            //Cancelar seguimiento en tiempo real
            stopRealTimeUserLocation();
        }
    }, [])

    useEffect(() => {
        //Si el usuario esta cambiando de vista no vuelvas a la posicion de seguimiento
        if (!following.current) return;
        //Seguir con la camara la posicion del usuario
        const location = userLocation;
        mapViewRef.current?.animateCamera({
            center: location
        })
    }, [userLocation])



    const handlePositionInitial = async () => {
        const location = await getCurrentLocation();
        following.current = true;
        mapViewRef.current?.animateCamera({
            center: location
        })
    }

    if (!hasLocation) return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Obteniendo Ubicación</Text>
            <LoadingScreen />
        </View>
    )
    //-26.191410670570185, -58.16893117375671
    return (
        <>
            <MapView
                ref={(element) => mapViewRef.current = element!}
                style={{ flex: 1, }}
                showsUserLocation
                initialRegion={{
                    latitude: initialPosition.latitude,
                    longitude: initialPosition.longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUD_DELTA,
                }}
                onTouchStart={() => following.current = false}
                userLocationUpdateInterval={3000}
            >
                <CardPin key={1} latitude={initialPosition.latitude} longitude={initialPosition.longitude} />
                {
                    routeLines && routeLines.length > 0 && (
                        <CardPin key={2} latitude={routeLines[0].latitude} longitude={routeLines[0].longitude} />
                    )
                }
                <AdressRoute />
                <Polyline coordinates={routeLines} strokeColor={palette.dark.metalblue} strokeWidth={3} />
            </MapView>
            <FabIcon nameIcon='compass-outline' onPress={handlePositionInitial} style={{ position: 'absolute', bottom: 10, right: 10 }} />
        </>
    )
}


const styles = StyleSheet.create({
    container: { flex: 1 }
})