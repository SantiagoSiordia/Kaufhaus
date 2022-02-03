import { ShoppingListItemType } from '@features';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShoppingListState {
    list: Array<ShoppingListItemType>
    totalPrice: number
};

const initialState: ShoppingListState = {
    list: [],
    totalPrice: 0,
};

export const checklistSlice = createSlice({
  name: 'checklist',
  initialState,
  reducers: {
    addItemToShoppingList: (state, action: PayloadAction<ShoppingListItemType>) => {
      state.list = [
        ...state.list,
        action.payload
      ]
      state.totalPrice += action.payload.price
    },
    deleteItemFromShoppingList: (state, action: PayloadAction<string>) => {
      const listItemToDelete = state.list.find(item => item.id === action.payload);
      state.list = state.list.filter(item => item.id !== action.payload);
      state.totalPrice -= listItemToDelete?.price || 0;
    },
    increaseItemQuantity: (state, action: PayloadAction<string>) => {
      const listItemToIncreaseQuantity = state.list.find(item => item.id === action.payload);
      const indexOfListItemToIncreaseQuantity = state.list.findIndex(item => item.id === action.payload);
      state.totalPrice += listItemToIncreaseQuantity?.price || 0;
      const newListState = state.list;
      newListState[indexOfListItemToIncreaseQuantity].quantity++;
      state.list = [ ...newListState ];
    }
  },
})

export const { addItemToShoppingList, deleteItemFromShoppingList, increaseItemQuantity } = checklistSlice.actions

export const checklistReducer = checklistSlice.reducer