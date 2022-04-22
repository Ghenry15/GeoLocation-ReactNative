import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack'
import React, { useEffect, useRef } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from './LoadingScreen';
import { FabIcon } from './buttons/FabIcon';



export const Maps = () => {
    const {
        hasLocation,
        initialPosition,
        getCurrentLocation,
        userLocation,
        locationRealTimeUser,
        stopRealTimeUserLocation,
        routeLines,
        locationError } = useLocation();
    const navigation = useNavigation();
    const mapViewRef = useRef<MapView>();
    const following = useRef<boolean>(true);

    console.log(initialPosition)

    useEffect(() => {
        locationRealTimeUser();
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

    // if (!isPermissions) return navigation.goBack();

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
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onTouchStart={() => following.current = false}
            >
                <Polyline
                    coordinates={routeLines}
                    strokeColor='#00a4eb'
                    strokeWidth={4}
                />
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