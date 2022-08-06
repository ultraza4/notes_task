import { Note, NotesAction } from './../../types/notes';
import { NotesActionsTypes } from "../../types/notes"

export const addToNotes = ({ id, text, sign, time, timeZone }) => async (
   dispatch: (arg0: { type: NotesActionsTypes.ADD_NOTE; payload: Note }) => void) => {

   const notes: Array<Note> = localStorage.getItem('notes')
      ? JSON.parse(localStorage.getItem('notes'))
      : []

   notes.push({ id, text, sign, time, timeZone })

   dispatch({ type: NotesActionsTypes.ADD_NOTE, payload: { id, text, sign, time, timeZone } })

   localStorage.setItem('notes', JSON.stringify(notes))
}

export const setCurrentPage = (page: number): NotesAction => ({ type: NotesActionsTypes.SET_CURRENT_PAGE, payload: page })