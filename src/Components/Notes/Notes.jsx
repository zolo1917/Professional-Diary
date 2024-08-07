import { Divider, Stack } from "@mui/material";
import CreateEditNote from "./CreateEditNote";
import NotesList from "./NotesList";
import { useEffect, useState } from "react";
import NoNoteSelected from "./NoNoteSelected";
import { getNotes } from "../../Services/NotesService";

function Notes() {
  const [selectedNote, setSelectedNote] = useState({
    id: "",
    title: "",
    text: "",
  });
  const [notes, setNotes] = useState([]);
  const [isNoteSelected, setIsNoteSelected] = useState(false);
  const [triggerUpdateList, setTriggerUpdateList] = useState(false);
  const handleNoteSelection = (obj) => {
    setIsNoteSelected(true);
    setSelectedNote(obj);
  };
  useEffect(() => {
    getNotes()
      .then(
        (response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            console.log(response.json());
            setNotes([]);
          }
        },
        (response) => {
          setNotes([]);
        }
      )
      .then((data) => {
        if (data) {
          setNotes(data);
        } else {
          setNotes([]);
        }
      });
  }, [triggerUpdateList]);

  const updateList = () => {
    setSelectedNote({
      title: "",
      text: "",
    });
    setIsNoteSelected(false);
    setTriggerUpdateList((previousState) => {
      return !previousState;
    });
  };

  const deleteNote = () => {
    setTriggerUpdateList((previousState) => {
      return !previousState;
    });
  };

  let selectedPage = <NoNoteSelected></NoNoteSelected>;
  if (isNoteSelected) {
    selectedPage = (
      <CreateEditNote note={selectedNote} onSubmitHandler={updateList} />
    );
  } else {
    selectedPage = <NoNoteSelected></NoNoteSelected>;
  }

  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      sx={{ height: "100vh" }}
    >
      <NotesList
        notes={notes}
        handleNoteSelection={handleNoteSelection}
        onDelete={deleteNote}
      />
      {selectedPage}
    </Stack>
  );
}

export default Notes;
