import { Input } from "native-base";
import React, { FC, useState } from 'react';
import { useDispatch } from "react-redux";
import { KhButton, KhText, KhView } from '~/src/components';
import { KhContainer } from "~/src/components/KhContainer/KhContainer";
import { createToken } from "~/src/utils";
import { addItemToChecklist } from "../../redux/reducers";
import { CheckList, CheckListItemType } from "../components";

export const CheckListScreen: FC = () => {

  const [ item, setItem ] = useState<string>('');
  const [ itemPrice, setItemPrice ] = useState<string>('');
  const [ , setList ] = useState<Array<CheckListItemType>>([]);

  const dispatch = useDispatch();

  const handleOnAddItemToChecklist = () => {
    dispatch(addItemToChecklist({
      id: createToken(15),
      item,
      price: +itemPrice,
      quantity: 1,
    }));
    setItem("");
    setItemPrice("");
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
        <KhButton onPress={handleOnAddItemToChecklist} text="Agregar elemento!" />
      </KhContainer>
        <CheckList />
    </KhView>
  );
};
