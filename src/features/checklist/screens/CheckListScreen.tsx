import { Input } from "native-base";
import React, { FC, useState } from 'react';
import { KhButton, KhText, KhView } from '~/src/components';
import { KhContainer } from "~/src/components/KhContainer/KhContainer";
import { createToken } from "~/src/utils";
import { CheckList, CheckListItemType } from "../components";

export const CheckListScreen: FC = () => {

  const [ item, setItem ] = useState<string>('');
  const [ itemPrice, setItemPrice ] = useState<string>('');
  const [ list, setList ] = useState<Array<CheckListItemType>>([]);

  const addItemToList = () => {
    setList(prevList => [...prevList, { id: createToken(15), item, price: +itemPrice }])
    setItem('');
  }

  return (
    <KhView backgroundColor={'white'} flex={1}>
      <KhContainer>
        <KhText variant={'body-bold'}>This is the checklist screen!</KhText>
        <Input onChangeText={setItem} value={item} size="md" placeholder="Producto"/>
        <Input
          onChangeText={(price) => {
            if(/^\d*(\.\d{0,2})?$/.test(price)) setItemPrice(price.replace(/[^0-9.]/g, ''));
          }}
          value={itemPrice}
          size="md"
          placeholder="Precio"
          keyboardType="number-pad"
          type="number"
        />
        <KhButton onPress={addItemToList} text="Agregar elemento!" />
      </KhContainer>
      <KhContainer>
        <CheckList list={list} />
      </KhContainer>
    </KhView>
  );
};
