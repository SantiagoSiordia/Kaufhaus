import { NativeStackHeaderProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Colors } from '../../theme/colors';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';

type PickedGradient = Pick<
  LinearGradientProps,
  'colors' | 'start' | 'end' | 'locations'
>;

const horizontalGradient: PickedGradient = {
  colors: [Colors.black, Colors.overlaySecondary],
  end: { x: 1, y: 1 },
  start: { x: 0, y: 0 },
  locations: [0.13, 1],
};

const verticalGradient: PickedGradient = {
  colors: [Colors.secondary, Colors.secondaryLight],
  end: { x: 0, y: 1 },
  start: { x: 0, y: 0 },
  locations: [0, 1],
};

export const Header: FC<NativeStackHeaderProps> = () => {
  return (
    <LinearGradient {...verticalGradient}>
      <LinearGradient {...horizontalGradient}>
        <View style={{ padding: 8 }}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require('../../resources/images/Kaufhaus-logo.jpeg')}
          />
        </View>
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.black,
    padding: 16,
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: 'TrebuchetMS-Bold',
  },
  logo: {
    width: 80,
    height: 48,
  },
  flex1: {
    width: '50%',
  },
});
