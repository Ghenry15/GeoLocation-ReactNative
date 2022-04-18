import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackHeaderProps } from '@react-navigation/stack'

export const HomeScreen = ({navigation}:StackHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text>Para acceder necesita habilitar los permisos solicitados</Text>
      <Button title='Habilitar Mapas' color='indigo' onPress={()=>navigation.navigate('MapScreen')} />
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1
  }
})