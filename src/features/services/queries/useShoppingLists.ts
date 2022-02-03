import { useQuery } from "react-query";
import { getShoppingLists } from "../shopping-lists/shoppingLists";
import { QUERIES } from "./Queries";

export const useShoppingLists = (userId: string) => 
    useQuery([QUERIES.SHOPPING_LISTS, userId], async () => await getShoppingLists(userId));