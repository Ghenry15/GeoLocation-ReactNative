import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackHeaderProps } from '@react-navigation/stack'
import { check, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions'

export const HomeScreen = ({ navigation }: StackHeaderProps) => {

  const checkPermissions = async () => {
    let permissionsState: PermissionStatus;
    if (Platform.OS) {
      // permissionsState = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      permissionsState = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      // permissionsState = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      permissionsState = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }
    console.log(permissionsState)
    // switch (permissionsState) {
    //   case 'unavailable':
    //     console.log('This feature is not available (on this device / in this context)');
    //     break;
    //   case 'denied':
    //     console.log('The permission has not been requested / is denied but requestable');
    //     break;
    //   case 'limited':
    //     console.log('The permission is limited: some actions are possible');
    //     break;
    //   case 'granted':
    //     console.log('The permission is granted');
    //     break;
    //   case 'blocked':
    //     console.log('The permission is denied and not requestable anymore');
    //     break;
    // }
  }

  return (
    <View style={styles.container}>
      <Text>Para acceder necesita habilitar los permisos solicitados</Text>
      <Button title='Habilitar Mapas' color='indigo' onPress={checkPermissions} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})