import { NativeStackHeaderProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { FC } from 'react';
import { Text, View } from 'react-native';

export const Header: FC<NativeStackHeaderProps> = (props) => {
    console.log(props)
    return <View>
        <Text>Header</Text>
    </View>
}