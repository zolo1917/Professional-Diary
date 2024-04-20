import { Divider, Stack } from "@mui/material";
import CreateEditNote from "./CreateEditNote";
import NotesList from "./NotesList";
import { useEffect, useState } from "react";
import NoNoteSelected from "./NoNoteSelected";

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

  const fetchNotes = () => {
    fetch("http://localhost:4301/notes")
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
          console.log(response);
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
  };
  useEffect(fetchNotes, [selectedNote, triggerUpdateList]);

  const updateList = () => {
    setSelectedNote({
      title: "",
      text: "",
    });
    setIsNoteSelected(false);
  };

  const deleteNote = () => {
    console.log(triggerUpdateList);
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
