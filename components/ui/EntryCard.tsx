import { UIContext } from "@/context/ui/UIContext";
import { Entry } from "@/interfaces/entries";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { DragEvent, FC, useContext } from "react";

interface props {
  entry: Entry;
}

const EntryCard: FC<props> = ({ entry }) => {
  const {startDragging, endDragging} = useContext(UIContext)

  const onDragStart = (event:DragEvent) => {
    event.dataTransfer.setData('text', entry.__id)
    startDragging()
  }

  const onDragEnd = (event:DragEvent) => {
    endDragging()
  }
  return (
    <Card
   
      sx={{
        marginBottom: 1,
        //evento drag
      }}
    >
      <CardActionArea>
        <CardContent  draggable onDragEnd={onDragEnd}  onDragStart={onDragStart} >
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2">hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default EntryCard;
