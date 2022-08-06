export interface LastOptionsState {
   lastOptions: LastOptions
}
export interface LastOptions {
   lastSign: string,
   lastTimeZone: string,
   lastPerPage: number
}
export enum LastOptionsActions {
   ADD_LAST_OPTIONS = 'ADD_LAST_OPTIONS'
}
export interface AddLastOptionAction {
   type: LastOptionsActions.ADD_LAST_OPTIONS,
   payload: LastOptions
}

export type LastOptionsAction = AddLastOptionAction