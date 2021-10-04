import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CheckListItemType } from '../../checklist/components';

interface ChecklistState {
    list: Array<CheckListItemType>
};

const initialState: ChecklistState = {
    list: [],
};

export const checklistSlice = createSlice({
  name: 'checklist',
  initialState,
  reducers: {
    addItemToChecklist: (state, action: PayloadAction<CheckListItemType>) => {
      state = {
          ...state,
          list: [
              ...state.list,
              action.payload
          ]
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItemToChecklist } = checklistSlice.actions

export const checklistReducer = checklistSlice.reducer