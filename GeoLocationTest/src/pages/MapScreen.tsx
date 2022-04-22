import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Maps } from '../component/Maps'

export const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Maps/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
    flex:1
  }
})