import { KhButton, KhContainer, KhInput, KhText, KhView } from "@components";
import { addItemToShoppingList } from "@redux";
import { useAppTranslation } from "@translations";
import { useFormik } from 'formik';
import React, { FC } from 'react';
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import { createToken } from "~/src/utils";
import { ShoppingList } from "../components";

Yup.addMethod(Yup.string, 'integer', function () {
  return this.matches(/^\d+$/, 'The field should have digits only')
})

const validationSchema = Yup.object({
  product: Yup.string().required(),
  // @ts-expect-error
  price: Yup.string().required().integer(),
})

export const ShoppingListScreen: FC = () => {

  const dispatch = useDispatch();
  const { t } = useAppTranslation();

  const handleOnAddItemToShoppingList = () => {
    dispatch(addItemToShoppingList({
      id: createToken(15),
      item: itemForm.values.product,
      price: +itemForm.values.price,
      quantity: 1,
    }));
    itemForm.handleReset("")
  }

  const itemForm = useFormik({
    onSubmit: handleOnAddItemToShoppingList,
    initialValues: {
      product: "",
      price: ""
    },
    validationSchema
  });

  return (
    <KhView backgroundColor={'white'} flex={1}>
      <KhContainer>
        <KhText variant={'body-bold'}>{t("shopping list")}</KhText>
        <KhInput
          icon="devices"
          name={t("product")}
          value={itemForm.values.product}
          onChangeText={itemForm.handleChange("product")}
          onBlur={itemForm.handleBlur('product')}
          error={itemForm.touched.product && !!itemForm.errors.product}
          errorMessage={itemForm.errors.product}
        />
        <KhInput
          icon="attach-money"
          name={t("price")}
          value={itemForm.values.price}
          onChangeText={itemForm.handleChange("price")}
          keyboardType="number-pad"
          onBlur={itemForm.handleBlur('price')}
          error={itemForm.touched.price && !!itemForm.errors.price}
          errorMessage={itemForm.errors.price}
        />
        <KhButton text={t("add element")} marginTop={4} onPress={() => itemForm.handleSubmit()} />
      </KhContainer>
      <ShoppingList />
    </KhView>
  );
};
