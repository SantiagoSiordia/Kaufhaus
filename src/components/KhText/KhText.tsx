import React from 'react';
import {
  ColorProps,
  OpacityProps,
  TypographyProps,
  TextShadowProps,
  SpacingProps,
  SpacingShorthandProps,
  VariantProps,
  color,
  opacity,
  typography,
  textShadow,
  spacing,
  spacingShorthand,
  createVariant,
  useRestyle,
} from '@shopify/restyle';
import type { Theme } from 'src/theme';
import { Text, TextProps } from 'react-native';

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
    Required<VariantProps<Theme, 'textVariants'>>
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
};
