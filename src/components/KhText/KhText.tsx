import {
  color, ColorProps, createVariant, opacity, OpacityProps, spacing, SpacingProps, spacingShorthand, SpacingShorthandProps, textShadow, TextShadowProps, typography, TypographyProps, useRestyle, VariantProps
} from '@shopify/restyle';
import React from 'react';
import { Text, TextProps } from 'react-native';
import type { Theme } from 'src/theme';

const restyleFunctions = [
  color,
  opacity,
  typography,
  textShadow,
  spacing,
  spacingShorthand,
  createVariant({ themeKey: 'textVariants' }),
];

export type KhTextProps = React.PropsWithChildren<
  TextProps &
    ColorProps<Theme> &
    OpacityProps<Theme> &
    TypographyProps<Theme> &
    TextShadowProps<Theme> &
    SpacingProps<Theme> &
    SpacingShorthandProps<Theme> &
    VariantProps<Theme, 'textVariants'>
>;

export const KhText: React.FC<
  Omit<KhTextProps, 'fontFamily' | 'fontSize' | 'lineHeight'>
> = props => {
  // @ts-expect-error missing typing in library
  const rest = useRestyle(restyleFunctions, props);
  return <Text {...rest} />;
};

KhText.defaultProps = {
  textShadowColor: 'overlayBlack',
  color: 'black',
  variant: 'body-regular'
};
