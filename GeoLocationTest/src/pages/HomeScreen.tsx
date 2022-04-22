import { Button, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { StackHeaderProps } from '@react-navigation/stack'
import LoadAvatar from '../component/LoadAvatar'
import { Divider } from 'react-native-elements'

export const HomeScreen = ({ navigation }: StackHeaderProps) => {

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, textAlign: 'center' }}>Para acceder necesita habilitar los permisos solicitados</Text>
      <Divider width={1.5} color='black' orientation='horizontal'/>
      <LoadAvatar />
      <View style={{ flex: 2, padding: 50, justifyContent: 'center', alignItems: 'center', }}>
        <TouchableOpacity onPress={() => navigation.navigate('MapScreen')} style={styles.touchableBtn}>
          <Text style={styles.txtBtn}>Ver Mapa</Text>
        </TouchableOpacity>
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
  txtBtn: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  touchableBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'indigo',
    width: 200,
    height: 50,
    borderRadius: 50
  }
})