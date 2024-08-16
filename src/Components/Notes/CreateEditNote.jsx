import { Box, Button, FormControl, Input, InputLabel } from "@mui/material";
import classes from "./editNote.module.css";
import { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { createNote, updateNote } from "../../Services/NotesService";

const CreateEditNote = ({ onSubmitHandler, note, ...props }) => {
  const [title, setTitle] = useState(note.title);
  const [editorState, setEditorState] = useState("");
  const clearFields = () => {
    setTitle("");
    setEditorState("");
  };
  useEffect(() => {
    setEditorState(note.text);
    setTitle(note.title);
  }, [note]);
  const handleSubmitClick = useCallback(
    (e) => {
      e.preventDefault();
      console.log(editorState);
      if (note.id) {
        const obj = {
          title: title,
          text: editorState,
          createdAt: note.createdAt,
        };
        updateNote(note.id, obj);
      } else {
        const obj = {
          title: title,
          text: editorState,
        };
        createNote(obj);
      }
      onSubmitHandler();
    },
    [title, editorState, onSubmitHandler]
  );
  return (
    <Box flex={8} sx={{ height: "100%", width: "100%" }}>
      <form className={`${classes.fullLength} ${classes.leftSpace}`}>
        <FormControl variant="standard" sx={{ width: "95%" }}>
          <InputLabel>Title</InputLabel>
          <Input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              console.log(title);
            }}
          ></Input>
        </FormControl>
        <FormControl
          variant="standard"
          sx={{ width: "95%", paddingTop: "2rem", height: "70%" }}
        >
          <ReactQuill
            className={classes.fullsize}
            value={editorState}
            onChange={(value) => setEditorState(value)}
          ></ReactQuill>
        </FormControl>
        <Box
          id="buttonContainer"
          sx={{
            display: "flex",
            width: "95%",
            justifyContent: "center",
            alignContent: "center",
            paddingTop: "3rem",
          }}
        >
          <Button
            variant="outlined"
            onClick={clearFields}
            sx={{ margin: "1.5rem" }}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmitClick}
            type="submit"
            sx={{ margin: "1.5rem" }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateEditNote;
