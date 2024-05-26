import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import NotesIcon from "@mui/icons-material/Notes";
import { deleteNote, getNotes } from "../../Services/NotesService";
import DeleteIcon from "@mui/icons-material/Delete";

const NotesList = ({ notes, handleNoteSelection, onDelete }) => {
  const [isNewNote, setIsNewNote] = useState(false);
  const createNewNote = () => {
    setIsNewNote(true);
    handleNoteSelection({
      title: "",
      Content: "",
      createdDate: new Date().toDateString(),
    });
  };

  const handleDeleteNote = (obj) => {
    deleteNote(obj._id);
    onDelete();
  };

  return (
    <Box flex={5} sx={{ width: "100%" }}>
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
      <Box sx={{ height: "83%", overflowY: "auto" }}>
        <List sx={{ width: "100%" }}>
          {notes?.map((obj) => {
            return (
              <ListItem key={obj._id} sx={{ width: "100%" }}>
                <Button
                  onClick={() => {
                    handleNoteSelection(obj);
                  }}
                  sx={{
                    alignItems: "start",
                    width: "100%",
                  }}
                >
                  <ListItemIcon>
                    <NotesIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={obj.title}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {obj.createdAt}
                        </Typography>
                      </>
                    }
                  ></ListItemText>
                </Button>
                <ListItemButton
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeleteNote(obj);
                  }}
                >
                  <DeleteIcon></DeleteIcon>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default NotesList;
