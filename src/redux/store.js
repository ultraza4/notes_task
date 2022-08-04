import { configureStore } from '@reduxjs/toolkit'
import { notesReducer } from "./notesReducer";
// import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";
import { lastOptionsReducer } from './lastOptionsReducer';

const rootReducer = {
   notes: notesReducer,
   options: lastOptionsReducer
}

export const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});