import { Box, Divider, Stack } from "@mui/material";
import CreateEditNote from "./CreateEditNote";
import NotesList from "./NotesList";

function Notes({}) {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
    >
      <NotesList />
      <CreateEditNote />
    </Stack>
  );
}

export default Notes;
