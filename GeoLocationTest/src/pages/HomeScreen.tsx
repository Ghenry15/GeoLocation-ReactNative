import { Button, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { StackHeaderProps } from '@react-navigation/stack'
import LoadAvatar from '../component/LoadAvatar'

export const HomeScreen = ({ navigation }: StackHeaderProps) => {

  return (
    <View style={styles.container}>
      <LoadAvatar />
      <Text>Para acceder necesita habilitar los permisos solicitados</Text>
      <View style={{ padding: 20 }}>
        {/* <Button title='Agregar foto' color='indigo' onPress={() => setIsVisible(true)} /> */}
      </View>
      <View style={{ padding: 20 }}>
        <Button title='Ver Mapa' color='indigo' onPress={() => navigation.navigate('MapScreen')} />
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
})