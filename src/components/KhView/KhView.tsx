import React from 'react';
import { createBox } from '@shopify/restyle';
import { ViewProps } from 'react-native';
import { Theme } from 'src/theme';

export const KhView = createBox<Theme, React.PropsWithChildren<ViewProps>>();
export type KhViewProps = React.ComponentPropsWithRef<typeof KhView>;
KhView.displayName = 'KhView';
