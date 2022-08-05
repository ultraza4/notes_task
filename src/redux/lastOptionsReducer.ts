import { LastOptionsState, LastOptionsAction, LastOptionsActions } from "../types/lastOptions"

const initialState: LastOptionsState = {
   lastOptions: {
      lastSign: "",
      lastTimeZone: ""
   }
}

if (window.localStorage.getItem('lastOptions')) {
   initialState.lastOptions = JSON.parse(localStorage.getItem('lastOptions'))
} else {
   initialState.lastOptions = { lastSign: "", lastTimeZone: "" }
}

export const lastOptionsReducer = (state = initialState, action: LastOptionsAction): LastOptionsState => {
   switch (action.type) {
      case LastOptionsActions.ADD_LAST_OPTIONS:
         return {
            ...state,
            lastOptions: action.payload
         }
      default:
         return state;
   }
}