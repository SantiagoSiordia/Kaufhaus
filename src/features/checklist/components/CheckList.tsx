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
        </KhView>
    )
}