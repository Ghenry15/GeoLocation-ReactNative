import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { StackHeaderProps } from '@react-navigation/stack'
import { check, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions'
import Camera from '../component/Camera'

export const HomeScreen = ({ navigation }: StackHeaderProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const checkPermissions = async () => {
    navigation.navigate('MapScreen');
    let permissionsState: PermissionStatus;
    if (Platform.OS) {
      // permissionsState = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      permissionsState = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      // permissionsState = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      permissionsState = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }
    console.log(permissionsState)
  }

  return (
    <View style={styles.container}>
      <Text>Para acceder necesita habilitar los permisos solicitados</Text>
      <View style={{padding:20}}>
        <Button title='Agregar foto' color='indigo' onPress={()=>setIsVisible(true)} />
      </View>
      <View style={{padding:20}}>
        <Button title='Habilitar Mapas' color='indigo' onPress={checkPermissions} />
      </View>
      <Camera isVisible={isVisible} setIsVisible={setIsVisible}/>
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