import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Camera from './Camera';

const LoadAvatar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [image, setTempPhoto] = useState();
    const [avatarLoading, setAvatarLoading] = useState(false);

    return (
        <View style={{flex:1,justifyContent:'center'}}>
            <View style={{ ...styles.containerAvatar }}>
                {avatarLoading && <View style={{ ...styles.containerLoading }}><ActivityIndicator animating={true} /></View>}
                <TouchableOpacity
                    style={{ ...styles.btnCamera, ...styles.shadow }}
                    onPress={() => setIsVisible(true)}
                >
                    {
                        image
                            ? (<Image source={{ uri: image }} style={styles.avatar} />)
                            : (<Icon name='camera-sharp' color={'grey'} size={40} />)
                    }

                </TouchableOpacity>
            </View>
            <Camera isVisible={isVisible} setIsVisible={setIsVisible} setTempPhoto={setTempPhoto} setAvatarLoading={setAvatarLoading}/>
        </View>
    )
}

export default LoadAvatar

const styles = StyleSheet.create({
    containerAvatar: {
        alignItems: 'center',
        paddingBottom: 10
    },
    containerLoading: {
        position: 'absolute',
        top: 58,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999
    },
    btnCamera: {
        width: 127,
        height: 127,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        borderRadius: 70,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 100,
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
})