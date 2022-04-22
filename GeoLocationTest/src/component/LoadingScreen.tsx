import { ActivityIndicator, StyleSheet, } from 'react-native'
import React from 'react'

export const LoadingScreen = () => {
    return (
        <ActivityIndicator size={30} style={styles.container} />
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})