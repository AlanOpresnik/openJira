import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { ChangeEvent, useContext, useState } from "react";
import { EntriesContext } from "@/context/entries/EntriesContext";
import { UIContext } from "@/context/ui/UIContext";

const NewEntrie = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const {isAddingEntry, setIsAddingEntry} = useContext(UIContext)
 
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
    addNewEntry(inputValue)
    setIsAddingEntry(false);
    setTouched(false)
    setInputValue("");
  };
  return (
    <Box
      sx={{
        marginBottom: 2,
        paddingX: 1,
      }}
    >
      {isAddingEntry ? (
        <>
          <TextField
            placeholder="Nueva tarea"
            helperText={
              inputValue.length <= 0 && touched ? "ingrese un valor" : ""
            }
            autoFocus
            multiline
            label={"Nueva tarea"}
            error={inputValue.length <= 0 && touched}
            onChange={handleTextChange}
            onBlur={() => setTouched(true)}
            value={inputValue}
            fullWidth
            sx={{
              marginTop: 2,
              marginBottom: 1,
            }}
          />
          <Box display={"flex"} justifyContent={"space-between"}>
            <Button variant="text" onClick={() => setIsAddingEntry(false)}>
              Cancelar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          fullWidth
          variant="outlined"
          startIcon={<AddCircleOutlineOutlinedIcon />}
          onClick={() => setIsAddingEntry(true)}
        >
          Agregar tarea
        </Button>
      )}
    </Box>
  );
};

export default NewEntrie;
