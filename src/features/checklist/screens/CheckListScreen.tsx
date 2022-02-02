import { KhButton, KhContainer, KhText, KhView } from "@components";
import { addItemToChecklist } from "@redux";
import { useAppTranslation } from "@translations";
import { Input } from "native-base";
import React, { FC, useState } from 'react';
import { useDispatch } from "react-redux";
import { createToken } from "~/src/utils";
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

  const { t } = useAppTranslation();

  return (
    <KhView backgroundColor={'white'} flex={1}>
      <KhContainer>
        <KhText variant={'body-bold'}>{t("shopping list")}</KhText>
        <Input onChangeText={setItem} value={item} size="md" placeholder={t("product")}/>
        <Input
          onChangeText={(price) => {
            if(/^\d*(\.\d{0,2})?$/.test(price)) setItemPrice(price.replace(/[^0-9.]/g, ''));
          }}
          value={itemPrice}
          size="md"
          placeholder={t("price")}
          keyboardType="number-pad"
          type="number"
        />
        <KhButton onPress={handleOnAddItemToChecklist} text={t("add element")} />
      </KhContainer>
        <CheckList />
    </KhView>
  );
};
