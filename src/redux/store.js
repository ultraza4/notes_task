import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import { notesReducer } from "./notesReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
   notesReducer: notesReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));