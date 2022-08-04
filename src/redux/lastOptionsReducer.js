export const ADD_LAST_OPTIONS = "ADD_LAST_OPTIONS"

const initialState = {
   lastOptions: {}
}

if (window.localStorage.getItem('lastOptions')) {
   initialState.lastOptions = JSON.parse(localStorage.getItem('lastOptions'))
} else {
   initialState.lastOptions = { lastSign: "", lastTimeZone: "" }
}

export const lastOptionsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_LAST_OPTIONS:
         return {
            ...state,
            lastOptions: action.payload
         }
      default:
         return state;
   }
}