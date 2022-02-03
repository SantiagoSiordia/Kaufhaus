import firestore from '@react-native-firebase/firestore';
import { QUERIES } from '..';

export type ShoppingListItem = {
    id: string;
    quantity: number;
    product: string;
    price: number;
}

export const getShoppingLists = async (userId: string) => {
    const querySnapshot = await firestore()
        .collection(QUERIES.SHOPPING_LISTS)
        .doc(userId)
        .collection(QUERIES.SHOPPING_LIST)
        .get();

    let docs: Array<ShoppingListItem> = [];
    
    querySnapshot.forEach((documentSnapshot) => {
        docs = [...docs, {
            id: documentSnapshot.id,
            ...documentSnapshot.data() as Omit<ShoppingListItem, "id">,
            quantity: 1,
        }]
    });

    return docs;
}