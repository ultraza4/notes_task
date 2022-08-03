export const ADD_NOTE = "ADD_NOTE";

const initialState = {
   notes: []
}

if (window.localStorage.getItem('notes')) {
   initialState.notes = JSON.parse(localStorage.getItem('notes'))
} else {
   initialState.notes = []
}


export const notesReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_NOTE:
         return {
            notes: [...state.notes, action.payload]
         }
      default:
         return state;
   }
}
