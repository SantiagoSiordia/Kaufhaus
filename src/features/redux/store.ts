import { configureStore } from '@reduxjs/toolkit'
import { checklistReducer } from './reducers'

export const store = configureStore({
  reducer: {
    checklist: checklistReducer
  },
})

export type RootState = ReturnType<typeof store.getState>