import React, { FC } from "react";
import { KhView } from "..";

export interface KhContainerProps {
    
}

export const KhContainer: FC = ({
    children
}) => (
    <KhView>
        {React.Children.map(children, (child) =>
            // @ts-expect-error child is really a React.ReactNode
            React.cloneElement(child, {
                style: {
                    margin: 8
                },
            }),
        )}
    </KhView>
);