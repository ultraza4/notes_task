import { NotesState, NotesAction, NotesActionsTypes } from "../types/notes"

const initialState: NotesState = {
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

export const notesReducer = (state = initialState, action: NotesAction): NotesState => {
   switch (action.type) {
      case NotesActionsTypes.ADD_NOTE:
         return {
            ...state,
            notes: [...state.notes, action.payload]
         }
      case NotesActionsTypes.SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.payload
         }
      case NotesActionsTypes.SET_TOTAL_COUNT:
         return {
            ...state,
            totalCount: action.payload
         }
      default:
         return state;
   }
}


export const setCurrentPage = (page: number): NotesAction => ({ type: NotesActionsTypes.SET_CURRENT_PAGE, payload: page })
export const setTotalCount = (count: number): NotesAction => ({ type: NotesActionsTypes.SET_TOTAL_COUNT, payload: count })