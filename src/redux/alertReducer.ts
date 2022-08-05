import { AlertState, AlertAction, AlertActionTypes } from "../types/alert"


const initialState: AlertState = {
   severity: 'success',
   alertText: 'Запись успешно создана',
   visible: false
}

export const alertReducer = (state = initialState, action: AlertAction): AlertState => {
   switch (action.type) {
      case AlertActionTypes.SET_ERROR:
         return {
            severity: 'error',
            alertText: "Что-то пошло не так, запись не создана",
            visible: action.payload
         }
      case AlertActionTypes.SET_SUCCESS:
         return {
            severity: 'success',
            alertText: 'Запись успешно создана',
            visible: action.payload
         }
      case AlertActionTypes.CLOSE_ALERT:
         return {
            ...state,
            visible: action.payload
         }
      default:
         return state;
   }
}


export const setSuccessAlert = (visible) => ({ type: AlertActionTypes.SET_SUCCESS, payload: visible })
export const setErrorAlert = (visible) => ({ type: AlertActionTypes.SET_ERROR, payload: visible })
export const closeAlert = (visible) => ({ type: AlertActionTypes.CLOSE_ALERT, payload: visible })