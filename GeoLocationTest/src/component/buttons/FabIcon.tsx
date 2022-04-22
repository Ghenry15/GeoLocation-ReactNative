import { StyleSheet, Text, View, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    nameIcon: string;
    style?: StyleProp<ViewStyle>
    onPress: () => void;
}

export const FabIcon = ({ nameIcon, onPress, style }: Props) => {
    return (
        <View style={{ ...style as any }}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={styles.btnFab}
            >
                <Icon
                    name={nameIcon}
                    size={45}
                    color='#FFFFFF'
                    style={{left:1}}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnFab: {
        zIndex: 9999,
        height: 50,
        width: 50,
        backgroundColor: '#228F8B',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
    }
});