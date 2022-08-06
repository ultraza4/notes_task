import { AlertState, AlertAction, AlertActionTypes } from "../types/alert"


const initialState: AlertState = {
   alert: 'success',
   alertText: 'Запись успешно создана',
   visible: false
}

export const alertReducer = (state = initialState, action: AlertAction): AlertState => {
   switch (action.type) {
      case AlertActionTypes.SET_ERROR:
         return {
            alert: 'error',
            alertText: "Что-то пошло не так, запись не создана",
            visible: action.payload
         }
      case AlertActionTypes.SET_SUCCESS:
         return {
            alert: 'success',
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


export const setSuccessAlert = (visible: boolean): AlertAction => ({ type: AlertActionTypes.SET_SUCCESS, payload: visible })
export const setErrorAlert = (visible: boolean): AlertAction => ({ type: AlertActionTypes.SET_ERROR, payload: visible })
export const closeAlert = (visible: boolean): AlertAction => ({ type: AlertActionTypes.CLOSE_ALERT, payload: visible })