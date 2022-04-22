import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { Dispatch, SetStateAction, useCallback, useMemo, useRef, useState } from 'react'
// import BottomSheet from '@gorhom/bottom-sheet';import { BottomSheet, Button, ListItem } from '@rneui/themed';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomSheet, Button, ListItem } from 'react-native-elements';
const Camera = ({isVisible,setIsVisible}:any) => {


    const [tempPhoto, setTempPhoto] = useState();
    const openGalery = () => {
        launchImageLibrary({ mediaType: 'photo', quality: 0.5, selectionLimit: 1 }, (resp) => {
            console.log(resp)
        })
    }
    const openCamera = () => {
        launchCamera({
            mediaType: 'photo',
            quality: 0.5
        }, (resp) => {
            console.log(resp);
            if (resp.didCancel) return;
            // if(!resp.) return;
            // setTempPhoto(resp.assets?.uri)
        })
    }

    return (
        <SafeAreaProvider>
            <BottomSheet

                modalProps={{}}
                isVisible={isVisible}
                // onBackdropPress={() => setIsVisible(false)}
                containerStyle={{ flex: 1, }}
                // scrollViewProps={{ marginHorizontal: 10, paddingBottom: 20, borderTopRadius: 50, }}
            >
                <View style={{ ...styles.shadow, ...styles.container }}>
                    <View style={{ ...styles.box, opacity: 0.5 }}>
                        <Text>Elegí las fotos</Text>
                    </View>
                    <View style={{ ...styles.box }}>
                        <TouchableOpacity onPress={openCamera}>
                            <Text>Sacar una foto ahora</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ ...styles.box, borderBottomWidth: 0 }}>
                        <TouchableOpacity onPress={openGalery}>
                            <Text>Buscar en mi galería</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <Button title="Cancelar"
                    titleStyle={{ color: 'black' }}
                    onPress={() => setIsVisible(false)}
                    buttonStyle={styles.btnCancelar}
                />
            </BottomSheet>
        </SafeAreaProvider>
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
        justifyContent: 'center',
        alignItem: 'center',
        textAlign: 'center',
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
        borderBottomWidth: 0.2,
        borderBottomColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'grey',
    }
})