import { PermissionStatus } from 'react-native-permissions';

export interface initialState {
    locationStatus: PermissionStatus
}

export const permissionsInitState: initialState = {
    locationStatus: 'unavailable'
}