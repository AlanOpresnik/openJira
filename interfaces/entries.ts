export interface Entry {
  __id: string;
  description: string;
  createdAt: Number;
  status: EntryStatus;
}

export type EntryStatus = "pending" | "in-progress" | "finished";
