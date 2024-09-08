import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  Stack,
} from "@mui/material";
import NotesList from "./NotesList";
import { useCallback, useEffect, useState } from "react";
import { getNoteById, getNotes } from "../../Services/NotesService";
import CreateEditNote from "./CreateEditNote";

function Notes() {
  const [selectedNote, setSelectedNote] = useState({
    id: "",
    title: "",
    text: "",
  });
  const [notes, setNotes] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const handleClose = () => {
    setOpenDialog(false);
  };
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

  const createNote = () => {
    toggleTriggerUpdateList();
    handleExpansion();
  };

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
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
    <>
      <Box sx={{ marginLeft: "0.5rem" }}>
        <Accordion expanded={expanded} onChange={handleExpansion}>
          <AccordionSummary aria-controls="panel3-content" id="panel3-header">
            New Note
          </AccordionSummary>
          <AccordionDetails>
            <CreateEditNote note={selectedNote} onSubmitHandler={createNote} />
          </AccordionDetails>
        </Accordion>
      </Box>
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
          <DialogContent sx={{ width: "37rem", height: "24rem" }}>
            <CreateEditNote note={selectedNote} onSubmitHandler={updateList} />
          </DialogContent>
        </Dialog>
      </Stack>
    </>
  );
}

export default Notes;
