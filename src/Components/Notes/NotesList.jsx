import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import NotesIcon from "@mui/icons-material/Notes";
import { deleteNote } from "../../Services/NotesService";
import classes from "./NoteList.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCallback } from "react";

const NotesList = ({ notes, handleNoteSelection, onDelete }) => {
  const createNewNote = () => {
    handleNoteSelection({
      title: "",
      Content: "",
      createdDate: new Date().toDateString(),
    });
  };

  const handleDeleteNote = useCallback(
    (obj) => {
      deleteNote(obj.id);
      onDelete();
    },
    [onDelete]
  );

  return (
    // <Box flex={5} sx={{ width: "100%" }}>

    //   <Box
    //     sx={{
    //       width: "100%",
    //       display: "flex",
    //       justifyContent: "start",
    //       alignContent: "center",
    //       padding: "2vh 1vh",
    //     }}
    //   >
    //     <Button onClick={createNewNote} variant="contained">
    //       New Note
    //     </Button>
    //   </Box>
    //   <Box sx={{ height: "83%", overflowY: "auto" }}>
    //     <List sx={{ width: "100%" }}>
    //       {notes?.map((obj) => {
    //         return (
    //           <ListItem key={obj.id} sx={{ width: "100%" }}>
    //             <Button
    //               onClick={() => {
    //                 handleNoteSelection(obj);
    //               }}
    //               sx={{
    //                 alignItems: "start",
    //                 width: "100%",
    //               }}
    //             >
    //               <ListItemIcon>
    //                 <NotesIcon />
    //               </ListItemIcon>
    //               <ListItemText
    //                 primary={obj.title}
    //                 secondary={
    //                   <>
    //                     <Typography
    //                       sx={{ display: "inline" }}
    //                       component="span"
    //                       variant="body2"
    //                       color="text.primary"
    //                     >
    //                       {/* {obj.createdAt} */}
    //                     </Typography>
    //                   </>
    //                 }
    //               ></ListItemText>
    //             </Button>
    //             <ListItemButton
    //               onClick={(e) => {
    //                 e.preventDefault();
    //                 handleDeleteNote(obj);
    //               }}
    //             >
    //               <DeleteIcon></DeleteIcon>
    //             </ListItemButton>
    //           </ListItem>
    //         );
    //       })}
    //     </List>
    //   </Box>
    // </Box>
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "start",
        alignContent: "center",
        padding: "2vh 1vh",
      }}
    >
      <Card sx={{ width: "99%" }}>
        <div className={classes.listTitle}>
          <h1 style={{ fontFamily: "Roboto Mono" }}>Your Notes</h1>
        </div>
        <Divider color="primary"></Divider>
        <Stack
          sx={{ margin: "1rem", width: "100%" }}
          direction="row"
          spacing={2}
          useFlexGap
          flexWrap="wrap"
        >
          {notes?.map((obj) => {
            console.log(obj);
            return (
              <Card key={obj.id} sx={{ width: "30%", height: "17rem" }}>
                <CardActionArea sx={{ height: "100%" }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {obj.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {obj.text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </Stack>
      </Card>
    </Box>
  );
};

export default NotesList;
