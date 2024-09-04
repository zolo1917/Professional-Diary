import { Dialog, Divider, Stack } from "@mui/material";
import NotesList from "./NotesList";
import { useCallback, useEffect, useState } from "react";
import { getNotes } from "../../Services/NotesService";
import CreateEditNote from "./CreateEditNote";

function Notes() {
  const [selectedNote, setSelectedNote] = useState({
    id: "",
    title: "",
    text: "",
  });
  const [notes, setNotes] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const handleClose = () => {
    setOpenDialog(false);
  };
  // const [isNoteSelected, setIsNoteSelected] = useState(false);
  const [triggerUpdateList, setTriggerUpdateList] = useState(false);
  const handleNoteSelection = (obj) => {
    setSelectedNote(obj);
    setOpenDialog(true);
  };
  const getDataFromBackend = useCallback(() => {
    getNotes().then((data) => {
      if (data) {
        setNotes(data);
      } else {
        setNotes([]);
      }
    });
  }, []);
  useEffect(() => {
    setTimeout(async () => {
      await getDataFromBackend();
    }, 800);
  }, [triggerUpdateList, getDataFromBackend]);

  const updateList = () => {
    toggleTriggerUpdateList();
    setOpenDialog(false);
  };

  const toggleTriggerUpdateList = () => {
    setTriggerUpdateList((previousState) => {
      return !previousState;
    });
  };

  const deleteNote = () => {
    toggleTriggerUpdateList();
  };

  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      sx={{ height: "100vh" }}
    >
      <NotesList
        notes={notes}
        handleUpdateList={toggleTriggerUpdateList}
        handleNoteSelection={handleNoteSelection}
        onDelete={deleteNote}
      />
      <Dialog color="primary" open={openDialog} onClose={handleClose}>
        <CreateEditNote note={selectedNote} onSubmitHandler={updateList} />
      </Dialog>
    </Stack>
  );
}

export default Notes;
