import { ADD_NOTE } from "../notesReducer"

export const addToNotes = (note) => async dispatch => {

   const notes = localStorage.getItem('notes')
      ? JSON.parse(localStorage.getItem('notes'))
      : []

   notes.push(note)

   dispatch({ type: ADD_NOTE, payload: { id: note.id, text: note.text, sign: note.sign, time: note.time } })

   localStorage.setItem('notes', JSON.stringify(notes))
}