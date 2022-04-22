import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { Dispatch, SetStateAction, useCallback, useMemo, useRef, useState } from 'react'
// import BottomSheet from '@gorhom/bottom-sheet';import { BottomSheet, Button, ListItem } from '@rneui/themed';
import { launchCamera, launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomSheet, Button, Divider } from 'react-native-elements';
const Camera = ({ isVisible, setIsVisible, setTempPhoto, setAvatarLoading }: any) => {

    const openGalery = () => {
        setIsVisible(false)
        setAvatarLoading(true)
        launchImageLibrary({ mediaType: 'photo', quality: 0.5, selectionLimit: 1 },
            ({ assets, didCancel }) => {
                let data: any = assets?.map(img => img)[0];
                if (didCancel) return;
                if (!data.uri) return;
                setTempPhoto(data.uri)
                setIsVisible(false)
                setAvatarLoading(false)
            })
    }
    const openCamera = () => {
        setIsVisible(false)
        setAvatarLoading(true)
        launchCamera({ mediaType: 'photo', quality: 0.5, },
            ({ assets, didCancel }) => {
                let data: any = assets?.map(img => img)[0];
                if (didCancel) return;
                if (!data.uri) return;
                setTempPhoto(data.uri)
                setAvatarLoading(false)
                console.log(data.uri);
            })
    }

    return (
        <BottomSheet
            modalProps={{
                onRequestClose: () => setIsVisible(false),
                animationType: 'slide',
            }}
            isVisible={isVisible}
            containerStyle={{ flex: 1, paddingBottom: 5, paddingHorizontal: 15 }}
        >
            <View style={{ ...styles.shadow, ...styles.container }}>
                <View style={{ ...styles.box, opacity: 0.5, }}>
                    <Text style={{ ...styles.titleStyle }}>Elegí las fotos</Text>
                </View>
                <Divider key={1} width={1} />
                <View style={{ ...styles.box }}>
                    <TouchableOpacity onPress={openCamera} style={{ ...styles.box }}>
                        <Text style={styles.titleStyle}>Sacar una foto ahora</Text>
                    </TouchableOpacity>
                </View>
                <Divider key={2} width={1} />
                <View style={{ ...styles.box }}>
                    <TouchableOpacity onPress={openGalery}>
                        <Text style={styles.titleStyle}>Buscar en mi galería</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <Button title="Cancelar"
                titleStyle={{ ...styles.titleStyle, color: '#1B1E21' }}
                onPress={() => setIsVisible(false)}
                buttonStyle={styles.btnCancelar}
            />
        </BottomSheet>
    )
}

export default Camera

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 15,
    },
    button: {
        margin: 25,
    },
    btnCancelar: {
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: 'white',
    },
    titleStyle: {
        textAlign: 'center',
        color: '#6F85A5',
        fontSize: 20,
        fontWeight: 'bold'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.40,
        shadowRadius: 2.62,
        elevation: 4,
    },
    box: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flex: 1,
        borderBottomWidth: 0.2,
        borderBottomColor: 'black',

    }
})