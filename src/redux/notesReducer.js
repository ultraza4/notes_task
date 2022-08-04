export const ADD_NOTE = "ADD_NOTE";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

const initialState = {
   notes: [],
   currentPage: 1,
   perPage: 6,
   totalCount: 0
}

if (window.localStorage.getItem('notes')) {
   initialState.notes = JSON.parse(localStorage.getItem('notes'))
   initialState.totalCount = JSON.parse(localStorage.getItem('notes')).length
} else {
   initialState.notes = []
}

export const notesReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_NOTE:
         return {
            ...state,
            notes: [...state.notes, action.payload]
         }
      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.payload
         }
      case SET_TOTAL_COUNT:
         return {
            ...state,
            totalCount: action.payload
         }
      default:
         return state;
   }
}


export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page })
export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, payload: count })