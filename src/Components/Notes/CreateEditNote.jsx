import { Box, Button, FormControl, Input, InputLabel } from "@mui/material";
import classes from "./editNote.module.css";
import { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { createNote, updateNote } from "../../Services/NotesService";
import { useNavigate } from "react-router";

const CreateEditNote = ({ onSubmitHandler, note, ...props }) => {
  const [title, setTitle] = useState(note.title);
  const [editorState, setEditorState] = useState("");
  const navigate = useNavigate();
  const clearFields = () => {
    onSubmitHandler();
  };
  useEffect(() => {
    setEditorState(note.text);
    setTitle(note.title);
  }, [note]);
  const handleSubmitClick = useCallback(
    (e) => {
      e.preventDefault();
      if (note.id) {
        const obj = {
          isFavorite: false,
          isPinned: false,
          isShared: false,
          title: title,
          text: editorState,
          createdAt: note.createdAt,
        };
        updateNote(note.id, obj);
      } else {
        const obj = {
          isFavorite: false,
          isPinned: false,
          isShared: false,
          title: title,
          text: editorState,
        };
        createNote(obj).catch((error) => {
          navigate("/homepage");
        });
      }
      onSubmitHandler();
    },
    [title, editorState, onSubmitHandler, note.createdAt, note.id, navigate]
  );
  return (
    <Box flex={8} sx={{ height: "100%", width: "100%", padding: "2.5%" }}>
      <form
        className={`${classes.fullLength} ${classes.leftSpace} ${classes.formHeight}`}
      >
        <FormControl variant="standard" sx={{ width: "95%" }}>
          <InputLabel>Title</InputLabel>
          <Input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></Input>
        </FormControl>
        <FormControl
          variant="standard"
          sx={{ width: "95%", paddingTop: "2rem", height: "10rem" }}
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
            Cancel
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
