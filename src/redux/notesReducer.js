export const ADD_NOTE = "ADD_NOTE";
export const ADD_LAST_OPTIONS = "ADD_LAST_OPTIONS"

const initialState = {
   notes: [],
   lastOptions: {}
}

if (window.localStorage.getItem('notes')) {
   initialState.notes = JSON.parse(localStorage.getItem('notes'))
} else {
   initialState.notes = []
}

if (window.localStorage.getItem('lastOptions')) {
   initialState.notes = JSON.parse(localStorage.getItem('lastOptions'))
} else {
   initialState.lastOptions = {lastSign: "",lastTimeZone: ""}
}


export const notesReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_NOTE:
         return {
            ...state,
            notes: [...state.notes, action.payload]
         }
      case ADD_LAST_OPTIONS:
         return{
            ...state,
            lastOptions: action.payload
         }
      default:
         return state;
   }
}
