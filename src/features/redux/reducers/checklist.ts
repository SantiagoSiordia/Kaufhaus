import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CheckListItemType } from '../../checklist/components';

interface ChecklistState {
    list: Array<CheckListItemType>
    totalPrice: number
};

const initialState: ChecklistState = {
    list: [],
    totalPrice: 0,
};

export const checklistSlice = createSlice({
  name: 'checklist',
  initialState,
  reducers: {
    addItemToChecklist: (state, action: PayloadAction<CheckListItemType>) => {
      state.list = [
        ...state.list,
        action.payload
      ]
      state.totalPrice += action.payload.price
    },
    deleteItemFromChecklist: (state, action: PayloadAction<string>) => {
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

export const { addItemToChecklist, deleteItemFromChecklist, increaseItemQuantity } = checklistSlice.actions

export const checklistReducer = checklistSlice.reducer