import { useQuery } from "react-query";
import { getShoppingList } from "../shopping-lists/shoppingLists";
import { QUERIES } from "./Queries";

const fetchShoppingList = () => getShoppingList("WCI6j2lX2gxOCeRqeei6")

export const useShoppingList = (documentId: string) => {
    return useQuery([QUERIES.SHOPPING_LIST, documentId], fetchShoppingList)
}