import { Entry } from "@/interfaces/entries";
import { entriesState } from "./EntriesProvider";

type EntriesActionType =
  | { type: "[entry] - Add-Entry"; payload: Entry }
  | { type: "[entry] - Entry-Updated"; payload: Entry };

export const entriesReducer = (
  state: entriesState,
  action: EntriesActionType
): entriesState => {
  switch (action.type) {
    case "[entry] - Add-Entry":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
      case '[entry] - Entry-Updated': return{
        ...state,
        entries: state.entries.map(entry => {
          if(entry.__id === action.payload.__id){
            entry.status = action.payload.status
            entry.description = action.payload.description
          }
          return entry;
        })
      }
    default:
      return state;
  }
};
