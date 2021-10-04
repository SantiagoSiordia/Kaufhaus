import React, { FC } from "react";
import { KhText, KhView } from "~/src/components";
import { numberAsCurrency } from "~/src/utils";

export interface CheckListItemType {
    id: string;
    item: string;
    price: number;
}

export interface CheckListProps {
    list: Array<CheckListItemType>
}

export const CheckList: FC<CheckListProps> = ({
    list
}) => {
    const total = list.reduce((acc, cur) => acc += cur.price, 0)
    return (
        <KhView>
            <KhText variant={"body-bold"}>These are the added items!</KhText>
            {list.map(listItem => {
                return (
                    <KhView key={listItem.id} flexDirection="row" justifyContent="space-between">
                        <KhText variant="body-regular">
                            {listItem.item}
                        </KhText>
                        <KhText variant="price-regular">
                            {numberAsCurrency(listItem.price)}
                        </KhText>
                    </KhView>
                )
            })}
            <KhView flexDirection="row" justifyContent="space-between">
                <KhText variant="body-regular">
                    Total
                </KhText> 
                <KhText variant="price-regular">
                    {numberAsCurrency(total)}
                </KhText>
            </KhView>
        </KhView>
    )
}