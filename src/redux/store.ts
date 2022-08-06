import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { notesReducer } from "./notesReducer";
import { lastOptionsReducer } from './lastOptionsReducer';
import { alertReducer } from './alertReducer';
import thunk from 'redux-thunk';

const rootReducer = {
   notes: notesReducer,
   options: lastOptionsReducer,
   alert: alertReducer
}

export const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch