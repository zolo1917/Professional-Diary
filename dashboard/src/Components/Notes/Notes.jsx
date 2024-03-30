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
  const handleNoteSelection = (obj) => {
    setIsNoteSelected(true);
    setSelectedNote(obj);
  };
  const fetchNotes = () => {
    fetch("http://localhost:4301/notes")
      .then(
        (response) => {
          return response.json();
        },
        (response) => {
          console.log(response);
          setNotes([]);
        }
      )
      .then((data) => {
        setNotes(data);
      });
  };
  useEffect(fetchNotes, [selectedNote]);
  const [isNoteSelected, setIsNoteSelected] = useState(false);

  const updateList = () => {
    setSelectedNote({
      title: "",
      text: "",
    });
    setIsNoteSelected(false);
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
      <NotesList notes={notes} handleNoteSelection={handleNoteSelection} />
      {selectedPage}
    </Stack>
  );
}

export default Notes;
