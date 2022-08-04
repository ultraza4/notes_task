import { ADD_LAST_OPTIONS } from "../notesReducer"

export const addLastOptions = (sign, timeZone) => async dispatch => {

   const lastOptions = localStorage.getItem('lastOptions')
      ? JSON.parse(localStorage.getItem('lastOptions'))
      : {sig: "", timZone: ""}

    lastOptions = {sign, timeZone}

   dispatch({ type: ADD_LAST_OPTIONS, payload: { sign, timeZone} })

   localStorage.setItem('lastOptions', JSON.stringify(lastOptions))
}