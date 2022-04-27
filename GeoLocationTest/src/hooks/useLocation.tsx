import Geolocation from '@react-native-community/geolocation';
import { useEffect, useRef, useState } from 'react';
import { Location } from '../interfaces/interface';
import { getLocationInst } from '../service/institucion';

export const useLocation = () => {

    const [hasLocation, sethasLocation] = useState(false);
    const [routeLines, setRouteLines] = useState<Location[]>([]);
    const watchId = useRef<number>();
    const isMounted = useRef<boolean>(true);
    const [initialPosition, setInitialPosition] = useState<Location>({
        latitude: 0,
        longitude: 0
    });

    const getMarkerInstitucion = async () => {
        const routeInst = await getLocationInst(2);
        console.log(routeInst[0].cords);
    }

    const [userLocation, setUserLocation] = useState<Location>({
        latitude: 0,
        longitude: 0,
    });

    const [locationError, setLocationError] = useState('');

    useEffect(() => {
        isMounted.current = true;

        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect(() => {

        getCurrentLocation().then(location => {
            //Si el componente no esta montado no hacer cambios en el state
            if (!isMounted.current) return;
            setInitialPosition(location);
            setUserLocation(location);
            //Seteo todas las rutas que recorrio el usuario
            setRouteLines(routes => [...routes, location]);
            sethasLocation(true);
        }).catch((err) => setLocationError(err))

    }, [])

    const getCurrentLocation = (): Promise<Location> => {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(
                ({ coords }) => {
                    const location: Location = {
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                    };
                    resolve(location);
                },
                error => reject(error.message),
                {
                    enableHighAccuracy: true,
                    timeout: 2000
                },
            );
        });
    };

    const getLocationRealTimeUser = () => {
        watchId.current = Geolocation.watchPosition(
            ({ coords }) => {
                //Si el componente no esta montado no hacer cambios en el state
                if (!isMounted.current) return;
                const location: Location = {
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                };
                setUserLocation(location);
                //Seteo todas las rutas que recorrio el usuario
                setRouteLines(routes => [...routes, location]);
            },
            error => console.log(error.message),
            {
                enableHighAccuracy: true, distanceFilter: 10
            },
        );
    }

    useEffect(() => {
        getMarkerInstitucion();
    }, [])


    const stopRealTimeUserLocation = () => {
        if (watchId.current) Geolocation.clearWatch(watchId.current);

    };


    return {
        hasLocation,
        initialPosition,
        getCurrentLocation,
        userLocation,
        getLocationRealTimeUser,
        locationError,
        stopRealTimeUserLocation,
        routeLines
    }
}