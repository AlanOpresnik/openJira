import { List, Paper } from "@mui/material";
import EntryCard from "./EntryCard";
import { EntryStatus } from "../../interfaces/entries";
import { DragEvent, FC, useContext, useMemo } from "react";
import { EntriesContext } from "@/context/entries/EntriesContext";
import { UIContext } from "@/context/ui/UIContext";
import styles from './entryList.module.css'

interface props {
  status: EntryStatus;
}

const EntryList: FC<props> = ({ status }) => {
  const { entries , UpdateEntry} = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const onDropEntry = (event: DragEvent) => {
    const id = event.dataTransfer.getData("text");
    console.log(isDragging);
    console.log(id);

    const entry = entries.find(e => e.__id === id)!;
    entry.status = status
    UpdateEntry(entry)
    endDragging()
  };

  const allowDrop = (event: DragEvent) => {
    event.preventDefault();
  };

  return (
    <div className={isDragging ? styles.dragging : ""} onDragOver={allowDrop} onDrop={onDropEntry}>
      <Paper
        sx={{
          height: "calc(100vh - 170px)",
          overflow: "scroll",
          backgroundColor: "transparent",
          padding: "0px 10px",
        }}
      >
        <List
          sx={{
            opacity: isDragging ? 0.2 : 1,
            transition: "all .3s",
          }}
        >
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry.__id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default EntryList;
