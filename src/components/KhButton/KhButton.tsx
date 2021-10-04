import { Button, IButtonProps } from 'native-base';
import React, { FC } from 'react';

export interface KhButtonProps extends IButtonProps{
    text: string;
}

export const KhButton: FC<KhButtonProps> = ({
    text,
    ...buttonProps
}) => {
    return (
        <Button {...buttonProps}>
            {text}
        </Button>
    )
}