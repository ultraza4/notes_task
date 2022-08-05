export interface AlertState {
   severity: string,
   alertText: string,
   visible: boolean
}

export enum AlertActionTypes {
   SET_SUCCESS = "SET_SUCCESS",
   SET_ERROR = "SET_ERROR",
   CLOSE_ALERT = "CLOSE_ALERT"
}

interface SetSuccessAction {
   type: AlertActionTypes.SET_SUCCESS,
   payload: boolean
}

interface SetErrorAction {
   type: AlertActionTypes.SET_ERROR,
   payload: boolean
}

interface CloseAlertAction {
   type: AlertActionTypes.CLOSE_ALERT,
   payload: boolean
}
export type AlertAction = SetSuccessAction | SetErrorAction | CloseAlertAction