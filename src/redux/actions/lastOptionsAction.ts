import { LastOptionsActions } from "../../types/lastOptions";

export const addLastOptions = (sign, timeZone) => async dispatch => {

   const lastOptions = localStorage.getItem('lastOptions')
      ? JSON.parse(localStorage.getItem('lastOptions'))
      : {}

   lastOptions.lastSign = sign;
   lastOptions.lastTimeZone = timeZone;

   dispatch({ type: LastOptionsActions.ADD_LAST_OPTIONS, payload: lastOptions })

   localStorage.setItem('lastOptions', JSON.stringify(lastOptions))
}