import { KhContainer, KhText, KhView } from "@components";
import { MaterialIcons } from "@expo/vector-icons";
import { deleteItemFromShoppingList, increaseItemQuantity, RootState } from "@redux";
import { useAppTranslation } from "@translations";
import { numberAsCurrency } from "@utils";
import React, { FC } from "react";
import { SwipeRow } from 'react-native-swipe-list-view';
import { useDispatch, useSelector } from "react-redux";
import { useShoppingLists } from "../../services";

export const ShoppingList: FC = () => {
    const checklist = useSelector((state: RootState) => state.checklist.list)
    const totalPrice = useSelector((state: RootState) => state.checklist.totalPrice)
    const dispatch = useDispatch();

    const { data: items } = useShoppingLists("WCI6j2lX2gxOCeRqeei6");

    const handleOnDeleteItemFromShoppingList = (itemId: string) => {
        dispatch(deleteItemFromShoppingList(itemId));
    }
    
    const handleOnIncreaseQuantity = (itemId: string) => {
        dispatch(increaseItemQuantity(itemId))
    }

    const { t } = useAppTranslation();

    return (
        <KhContainer>
            <KhText variant="body-bold">{t("added items")}</KhText>
            {checklist.map(listItem => {
                return (
                    <KhView key={listItem.id}>
                        <SwipeRow
                            onLeftAction={() => handleOnDeleteItemFromShoppingList(listItem.id)}
                            leftActivationValue={100}
                            onRightAction={() => handleOnIncreaseQuantity(listItem.id)}
                            rightActivationValue={100}
                            stopLeftSwipe={50}
                            friction={4}
                            preview
                        >
                            <KhView flexDirection="row" justifyContent="space-between" alignItems="center" width="100%" height="100%">
                                <KhView backgroundColor="danger" height="100%" justifyContent="center" width="50%" paddingHorizontal="m">
                                    <MaterialIcons name="clear" size={24} color="white" />
                                </KhView>
                                <KhView backgroundColor="success" height="100%" justifyContent="center" alignItems="flex-end" width="50%" paddingHorizontal="m">
                                    <MaterialIcons name="add" size={24} color="white" />
                                </KhView>
                            </KhView>
                            <KhView backgroundColor="white" flexDirection="row" justifyContent="space-between" alignItems="center">
                                <KhView justifyContent="center" width="20%">
                                    <KhText variant="body-bold">
                                        {listItem.item}
                                    </KhText>
                                    <KhText variant="btn">
                                        {listItem.quantity}
                                    </KhText>
                                </KhView>
                                <KhText variant="price-regular">
                                    {numberAsCurrency(listItem.price)}
                                </KhText>
                            </KhView>
                        </SwipeRow>
                    </KhView>
                )
            })}
            <KhView flexDirection="row" justifyContent="space-between">
                <KhText variant="body-bold">
                    {t("total")}
                </KhText> 
                <KhText variant="price-regular">
                    {numberAsCurrency(totalPrice)}
                </KhText>
            </KhView>
        </KhContainer>
    )
}