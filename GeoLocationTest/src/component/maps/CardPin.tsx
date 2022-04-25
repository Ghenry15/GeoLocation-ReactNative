import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { Marker } from 'react-native-maps'
import { Location } from '../../interfaces/interface';
import Icon from 'react-native-vector-icons/Ionicons';


const CardPin = ({ latitude, longitude }: Location) => {
    return (
        <Marker
            image={require('../../assets/icon/markerLogo.png')}
            // icon={<Icon size={25} color={'#00a4eb'} />}
            key={1}
            coordinate={{ latitude, longitude }}
            // title={'Tu ubicacion'}
            description={'Mi ubicacion actual'}
            tracksViewChanges={false}//permite a los marcadores realizar un seguimiento de los cambios en la vista y volver a dibujar
        />
    )
}

export default memo(CardPin)

const styles = StyleSheet.create({})