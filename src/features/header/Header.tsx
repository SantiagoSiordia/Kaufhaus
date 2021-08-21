import { NativeStackHeaderProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Colors } from "../../theme/colors";

export const Header: FC<NativeStackHeaderProps> = () => {
    return <View style={styles.container}>
        {/* <Text style={styles.text}>Kaufhaus</Text> */}
        <Image style={styles.logo} source={require('../../resources/images/Kaufhaus-logo.jpeg')} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.secondary,
        padding: 16
    },
    text: {
        fontSize: 16,
        color: Colors.white,
        fontFamily: 'TrebuchetMS-Bold'
    },
    logo: {
        width: 20,
        height: 20
    }
})
