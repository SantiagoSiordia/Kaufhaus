import React, { FC } from 'react';
import { KhText, KhView } from '~/src/components';

export const CheckListScreen: FC = () => {
  return (
    <KhView backgroundColor={'white'} flex={1}>
      <KhText variant={'h2'}>This is the checklist screen!</KhText>
    </KhView>
  );
};
