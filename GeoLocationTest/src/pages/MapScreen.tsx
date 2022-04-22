import {  Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Maps } from '../component/Maps'
import { check, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions'
import { useNavigation } from '@react-navigation/native'
import { LoadingScreen } from '../component/LoadingScreen'

export const MapScreen = () => {
  const [isAvailibity, setisAvailibity] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  const checkPermissions = async () => {
    if (Platform.OS === 'android') {
      await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((resp) => {
        console.log(resp);
        if (resp !== 'granted') {
          setIsLoading(false)
          navigation.goBack()
        }
        setIsLoading(false)
        setisAvailibity(true);
      }).catch(console.log);
    } else {
      await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then((resp) => {
        console.log(resp);
        (resp === 'granted')
          ? setisAvailibity(true)
          : () => navigation.goBack();
      }).catch(console.log);
    }
  }

  useEffect(() => {
    checkPermissions()
  }, [])

  if (isLoading) return (<LoadingScreen/>)
  return (
    <View style={styles.container}>
      {
        (isAvailibity) && <Maps />
      }
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})