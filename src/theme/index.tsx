import { Colors } from './colors';
import { createTheme, ThemeProvider, useTheme } from '@shopify/restyle';
import React from 'react';
import { containerVariants, textVariants } from '~/src/theme/variants';

export const theme = createTheme({
  colors: {
    ...Colors,
  },
  spacing: {
    none: 0,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 48,
  },
  borderRadii: {
    standard: 8,
  },
  zIndices: {
    10: 10,
  },
  breakpoints: {},
  containerVariants,
  textVariants,
});

export type Theme = typeof theme;

export const useKhTheme = () => useTheme<Theme>();
export const KhThemeProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
