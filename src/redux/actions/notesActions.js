import { ADD_NOTE } from "../notesReducer"

export const addToNotes = ({id, text, sign, time}) => async dispatch => {

   const notes = localStorage.getItem('notes')
      ? JSON.parse(localStorage.getItem('notes'))
      : []

   notes.push({id, text, sign, time})

   dispatch({ type: ADD_NOTE, payload: { id, text, sign, time } })

   localStorage.setItem('notes', JSON.stringify(notes))
}