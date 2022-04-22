import Geolocation from '@react-native-community/geolocation';
import { useEffect, useRef, useState } from 'react';
import { Location } from '../interfaces/interface';

export const useLocation = () => {

    const [hasLocation, sethasLocation] = useState(false);
    const watchId = useRef<number>();
    const [initialPosition, setInitialPosition] = useState<Location>({
        latitude: 0,
        longitude: 0
    });

    const [userLocation, setUserLocation] = useState<Location>({
        latitude: 0,
        longitude: 0,
    });

    const [locationError, setLocationError] = useState('');

    useEffect(() => {

        getCurrentLocation().then(location => {
            setInitialPosition(location);
            setUserLocation(location);
            sethasLocation(true);
        }).catch((err) => setLocationError(err))

    }, [])

    const getCurrentLocation = (): Promise<Location> => {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(
                ({ coords }) => {
                    resolve({
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                    });
                },
                error => reject(error.message),
                {
                    enableHighAccuracy: true,
                    timeout: 2000
                },
            );
        });
    };

    const locationRealTimeUser = () => {
        watchId.current = Geolocation.watchPosition(
            ({ coords }) => {
                setUserLocation({
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                });
            },
            error => console.log(error.message),
            {
                enableHighAccuracy: true, distanceFilter: 10
            },
        );
    }

    const stopRealTimeUserLocation = () => {
        if (watchId.current) Geolocation.clearWatch(watchId.current);

    };


    return {
        hasLocation,
        initialPosition,
        getCurrentLocation,
        userLocation,
        locationRealTimeUser,
        locationError,
        stopRealTimeUserLocation
    }
}