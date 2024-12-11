import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Dialog,
  DialogContent,
  Divider,
  Stack,
} from "@mui/material";
import NotesList from "./NotesList";
import { useCallback, useEffect, useState } from "react";
import { getNotesForCurrentUser } from "../../Services/NotesService";
import CreateEditNote from "./CreateEditNote";

function Notes({ handleLogout }) {
  const [selectedNote, setSelectedNote] = useState({
    id: "",
    title: "",
    text: "",
  });
  const [notes, setNotes] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [filterPinned, setFilterPinned] = useState(false);
  const [filterFavorite, setFilterFavorite] = useState(false);
  const [filterShared, setFilterShared] = useState(false);
  const handleClose = () => {
    setOpenDialog(false);
  };
  const [triggerUpdateList, setTriggerUpdateList] = useState(false);
  const handleNoteSelection = (obj) => {
    setSelectedNote(obj);
    setOpenDialog(true);
  };
  const getDataFromBackend = useCallback(() => {
    getNotesForCurrentUser().then(
      (data) => {
        if (data) {
          let updatedData = data;
          if (data)
            if (filterPinned) {
              updatedData = data.filter((obj) => {
                return obj.isPinned;
              });
            } else if (filterFavorite) {
              updatedData = data.filter((obj) => {
                return obj.isFavorite;
              });
            } else if (filterShared) {
              updatedData = data.filter((obj) => {
                return obj.isShared;
              });
            }
          setNotes(updatedData);
        } else {
          setNotes([]);
        }
      },
      (response) => {
        handleLogout();
      }
    );
  }, [handleLogout, filterPinned, filterFavorite, filterShared]);
  useEffect(() => {
    setTimeout(async () => {
      await getDataFromBackend();
    }, 1000);
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
    setSelectedNote({ id: "", title: "", text: "" });
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const toggleTabChange = (value) => {
    switch (value) {
      case "1":
        setFilterShared(true);
        setFilterFavorite(false);
        setFilterPinned(false);
        break;
      case "2":
        setFilterPinned(true);
        setFilterFavorite(false);
        setFilterShared(false);
        break;
      case "3":
        setFilterFavorite(true);
        setFilterShared(false);
        setFilterPinned(false);
        break;
      default:
        setFilterFavorite(false);
        setFilterShared(false);
        setFilterPinned(false);
        break;
    }
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
          handleUpdateList={toggleTabChange}
          handleNoteSelection={handleNoteSelection}
          handleLogout={handleLogout}
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
