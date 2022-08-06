import { LastOptions } from './../../types/lastOptions';
import { LastOptionsActions } from "../../types/lastOptions";

export const addLastOptions = (sign: string, timeZone: string) => async (dispatch:
   (arg0: { type: LastOptionsActions.ADD_LAST_OPTIONS; payload: LastOptions }) => void) => {

   const lastOptions: LastOptions = localStorage.getItem('lastOptions')
      ? JSON.parse(localStorage.getItem('lastOptions'))
      : {}

   lastOptions.lastSign = sign;
   lastOptions.lastTimeZone = timeZone;

   dispatch({ type: LastOptionsActions.ADD_LAST_OPTIONS, payload: lastOptions })

   localStorage.setItem('lastOptions', JSON.stringify(lastOptions))
}