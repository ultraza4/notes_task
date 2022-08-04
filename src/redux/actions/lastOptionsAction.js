import { ADD_LAST_OPTIONS } from "../lastOptionsReducer"

export const addLastOptions = (sign, timeZone) => async dispatch => {

   const lastOptions = localStorage.getItem('lastOptions')
      ? JSON.parse(localStorage.getItem('lastOptions'))
      : {}

   lastOptions.lastSign = sign;
   lastOptions.lastTimeZone = timeZone;

   dispatch({ type: ADD_LAST_OPTIONS, payload: lastOptions })

   localStorage.setItem('lastOptions', JSON.stringify(lastOptions))
}