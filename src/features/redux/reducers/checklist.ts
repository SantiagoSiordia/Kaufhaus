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
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItemToChecklist, deleteItemFromChecklist } = checklistSlice.actions

export const checklistReducer = checklistSlice.reducer