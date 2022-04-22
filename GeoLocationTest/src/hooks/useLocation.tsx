import Geolocation from '@react-native-community/geolocation';
import { useEffect, useState } from 'react';
import { Location } from '../interfaces/interface';

export const useLocation = () => {

    const [hasLocation, sethasLocation] = useState(false);
    const [initialPosition, setInitialPosition] = useState<Location>({
        latitude: 0,
        longitude: 0
    });

    const [locationError, setLocationError] = useState('');

    useEffect(() => {

        getCurrentLocation().then(location => {
            setInitialPosition(location);
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


    return {
        hasLocation,
        initialPosition,
        locationError,
        getCurrentLocation
    }
}