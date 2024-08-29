import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tab,
  Tabs,
} from "@mui/material";
import { deleteNote } from "../../Services/NotesService";
import classes from "./NoteList.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useCallback, useEffect, useState } from "react";
import parse from "html-react-parser";

const NotesList = ({ notes, handleUpdateList, onDelete }) => {
  const [tabValue, setTabValue] = useState("0");
  const [show, setShow] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const open = Boolean(openMenu);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    handleUpdateList();
    setShow(false);
  };
  const handleMenuOpen = (event) => {
    setOpenMenu(event.currentTarget);
  };
  const handleMenuClose = (event) => {
    setOpenMenu(null);
  };

  const handleViewNote = (obj) => {
    handleMenuClose();
  };

  const handleEditNode = (obj) => {
    handleMenuClose();
  };

  const handleDeleteNote = useCallback(
    (obj) => {
      console.log("in Delete Note");
      deleteNote(obj.id);
      handleMenuClose();
      onDelete();
    },
    [onDelete]
  );
  useEffect(() => {
    if (notes.length > 0) {
      setShow(true);
    }
  }, [notes]);

  return (
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

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="Notes" value="0" />
            <Tab label="Shared" value="1" />
            <Tab label="Pinned" value="2" />
            <Tab label="Favorite Notes" value="3" />
          </Tabs>
        </Box>
        <Fade bottom in={show} appear={false} timeout={800}>
          <div>
            <Stack
              sx={{ margin: "1rem", width: "100%" }}
              direction="row"
              spacing={2}
              useFlexGap
              flexWrap="wrap"
            >
              {notes?.map((obj) => {
                const contentHtml = parse(obj.text);
                return (
                  <Card key={obj.id} sx={{ width: "30%", height: "17rem" }}>
                    <CardHeader
                      title={obj.title}
                      action={
                        <IconButton
                          aria-label="settings"
                          onClick={handleMenuOpen}
                        >
                          <MoreVertIcon />
                        </IconButton>
                      }
                    ></CardHeader>
                    <Menu
                      open={open}
                      onClose={handleMenuClose}
                      anchorEl={openMenu}
                    >
                      <MenuItem onClick={() => handleViewNote(obj)}>
                        View
                      </MenuItem>
                      <MenuItem onClick={() => handleEditNode(obj)}>
                        Edit
                      </MenuItem>
                      <MenuItem onClick={() => handleDeleteNote(obj)}>
                        Delete
                      </MenuItem>
                    </Menu>
                    <CardActionArea>
                      <CardContent>{contentHtml}</CardContent>
                    </CardActionArea>
                  </Card>
                );
              })}
            </Stack>
          </div>
        </Fade>
      </Card>
    </Box>
  );
};

export default NotesList;
