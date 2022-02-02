import { KhContainer, KhInput, KhText, KhView } from "@components";
import { addItemToChecklist } from "@redux";
import { useAppTranslation } from "@translations";
import { useFormik } from 'formik';
import React, { FC, useState } from 'react';
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import { createToken } from "~/src/utils";
import { CheckList } from "../components";

Yup.addMethod(Yup.string, 'integer', function () {
  return this.matches(/^\d+$/, 'The field should have digits only')
})

const validationSchema = Yup.object({
  product: Yup.string().required(),
  // @ts-expect-error
  price: Yup.string().required().integer(),
})

export const CheckListScreen: FC = () => {

  const [ item, setItem ] = useState<string>('');
  const [ itemPrice, setItemPrice ] = useState<string>('');

  const dispatch = useDispatch();

  const itemForm = useFormik({
    onSubmit: () => {
      console.log("Hello")
    },
    initialValues: {
      product: "",
      price: ""
    },
    validationSchema
  });

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
      </KhContainer>
      <CheckList />
    </KhView>
  );
};
