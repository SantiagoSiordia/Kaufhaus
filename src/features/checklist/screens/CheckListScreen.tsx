import { Button, Input } from "native-base";
import React, { FC, useState } from 'react';
import { KhText, KhView } from '~/src/components';
import { KhContainer } from "~/src/components/KhContainer/KhContainer";

export const CheckListScreen: FC = () => {

  const [ item, setItem ] = useState<string>('');

  const addItemToList = () => {
    console.log('Hello');
  }

  return (
    <KhView backgroundColor={'white'} flex={1}>
      <KhView>
        <KhContainer>
          <KhText variant={'body-bold'}>This is the checklist screen!</KhText>
          <Input onChangeText={setItem} value={item} size="md" placeholder="¡Inserte nuevo elemento!"/>
          <Button onPress={addItemToList}>Button</Button>
        </KhContainer>
      </KhView>
    </KhView>
  );
};
