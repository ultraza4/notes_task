import { PayloadAction } from "@reduxjs/toolkit"

export interface NotesState {
   notes: Array<Note>,
   currentPage: number,
   perPage: number,
   totalCount: number,
}

export type Note = {
   id: number,
   sign: string,
   text: string,
   timeZone: string,
   time: Record<string, any>
}

export enum NotesActionsTypes {
   ADD_NOTE = "ADD_NOTE",
   SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
   SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
}

interface AddNoteActionType {
   type: NotesActionsTypes.ADD_NOTE,
   payload: Note
}

interface SetCurrentPageActionType {
   type: NotesActionsTypes.SET_CURRENT_PAGE,
   payload: number
}

interface SetTotalCountActionType {
   type: NotesActionsTypes.SET_TOTAL_COUNT,
   payload: number
}

export type NotesAction = AddNoteActionType | SetCurrentPageActionType | SetTotalCountActionType