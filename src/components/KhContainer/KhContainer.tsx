import React, { FC } from "react";
import { ViewProps } from "react-native";
import { KhView } from "..";

export interface KhContainerProps {
    itemStyle?: ViewProps;
    containerStyle?: ViewProps;
}

export const KhContainer: FC<KhContainerProps> = ({
    children,
    itemStyle,
    containerStyle
}) => (
    <KhView margin="m" {...containerStyle}>
        {React.Children.map(children, (child) =>
            <KhView margin="s" {...itemStyle}>
                {child}
            </KhView>
        )}
    </KhView>
);