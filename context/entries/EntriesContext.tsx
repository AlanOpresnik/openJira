import { Entry } from "@/interfaces/entries";
import { createContext } from "react";

interface contextProps {
  entries: Entry[];
  addNewEntry: (description: string) => void;
  UpdateEntry: (entry: Entry) => void;
}

export const EntriesContext = createContext({} as contextProps);
