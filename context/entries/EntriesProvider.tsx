import { FC, useReducer } from "react";
import { entriesReducer } from "./entriesReducer";
import { Entry } from "@/interfaces/entries";
import { EntriesContext } from "./EntriesContext";
import { v4 as uuidv4 } from "uuid";

export interface entriesState {
  entries: Entry[];
}
const ENTRIES_INITIAL_STATE: entriesState = {
  entries: [
    {
      __id: uuidv4(),
      description:
        "prendiente: lorem ipsum dolor sit amet, consectetur adip eu fugiat null  a ante",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      __id: uuidv4(),
      description:
        "EN PROFRESO: lorem ipsum dolor sit amet, consectetur adip eu fugiat null  a ante",
      status: "in-progress",
      createdAt: Date.now() - 10000000,
    },
    {
      __id: uuidv4(),
      description:
        "FINALIZADA: lorem ipsum dolor sit amet, consectetur adip eu fugiat null  a ante",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};
export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      __id: uuidv4(),
      description: description,
      createdAt: Date.now(),
      status: "pending",
    };
    dispatch({ type: "[entry] - Add-Entry", payload: newEntry });
  };

  const UpdateEntry = (entry: Entry) => {
    dispatch({ type: "[entry] - Entry-Updated", payload: entry})
  }
  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        UpdateEntry
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
