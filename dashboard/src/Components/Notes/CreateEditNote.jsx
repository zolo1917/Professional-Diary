import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import classes from "./editNote.module.css";
import { useState } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import Quill from "quill";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const CreateEditNote = ({ handleSubmit, header, text, ...props }) => {
  const [title, setTitle] = useState(header);
  const [content, setContent] = useState(() => EditorState.createEmpty());
  const [editorState, setEditorState] = useState("");
  const clearFields = () => {
    setTitle("");
    setContent("");
  };
  return (
    <Box flex={8} sx={{ height: "100%", width: "100%" }}>
      <form className={`${classes.fullLength} ${classes.leftSpace}`}>
        <FormControl variant="standard" sx={{ width: "95%" }}>
          <InputLabel onChange={() => setContent}>Title</InputLabel>
          <Input></Input>
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
            onClick={handleSubmit}
            sx={{ margin: "1.5rem" }}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            onClick={clearFields}
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
