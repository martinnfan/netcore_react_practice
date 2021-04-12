import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesReducer';

export const store = configureStore({
  reducer: {
    notesReducer: notesReducer,
  },
});
