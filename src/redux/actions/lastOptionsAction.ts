import { LastOptions, AddLastOptionAction } from './../../types/lastOptions';
import { LastOptionsActions } from "../../types/lastOptions";
import { Dispatch } from 'redux';

export const addLastOptions = (sign: string, timeZone: string, lastPerPage: number) => async (dispatch: Dispatch<AddLastOptionAction>) => {

   const lastOptions: LastOptions = localStorage.getItem('lastOptions')
      ? JSON.parse(localStorage.getItem('lastOptions'))
      : {}

   lastOptions.lastSign = sign;
   lastOptions.lastTimeZone = timeZone;
   lastOptions.lastPerPage = lastPerPage;

   dispatch({ type: LastOptionsActions.ADD_LAST_OPTIONS, payload: lastOptions })

   localStorage.setItem('lastOptions', JSON.stringify(lastOptions))
}