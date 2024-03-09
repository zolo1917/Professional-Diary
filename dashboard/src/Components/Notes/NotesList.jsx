import { Box, Button, List, ListItem } from "@mui/material";
import { useEffect, useState } from "react";
import NotesIcon from "@mui/icons-material/Notes";

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [isNewNote, setIsNewNote] = useState(false);
  const fetchNotes = () => {
    fetch("localhost:4300/getNotes").then(
      (response) => {
        console.log(response.json);
        setNotes(response.json);
      },
      (response) => {
        console.log(response.json);
        setNotes([]);
      }
    );
  };
  const createNewNote = () => {
    setIsNewNote(true);
  };
  useEffect(fetchNotes, []);
  return (
    <Box flex={5}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "start",
          alignContent: "center",
          padding: "2vh 1vh",
        }}
      >
        <Button onClick={createNewNote} variant="contained">
          New Note
        </Button>
      </Box>
      <Box>
        <List sx={{ width: "100%" }}>
          <ListItem>
            <NotesIcon />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default NotesList;
