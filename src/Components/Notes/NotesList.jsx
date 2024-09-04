import {
  Box,
  Card,
  CardActionArea,
  CardActions,
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
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const NotesList = ({
  notes,
  handleNoteSelection,
  handleUpdateList,
  onDelete,
}) => {
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
    console.log("this is the obj: " + obj.title);
    handleNoteSelection(obj);
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
        <Fade in={show} appear={false} timeout={800}>
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
                console.log(obj);
                return (
                  <Card
                    key={obj.id}
                    sx={{
                      width: "30%",
                      "-webkit-transition": "background 0.5s",
                      transition: "background 0.5s",
                      ":hover": {
                        background: "black",
                        color: "white",
                      },
                    }}
                  >
                    <CardHeader
                      avatar={
                        <CalendarMonthIcon
                          sx={{
                            ":hover": {
                              color: "white",
                            },
                          }}
                        />
                      }
                      action={
                        <IconButton
                          color="inherit"
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
                      <MenuItem
                        sx={{ backgroundColor: "white", color: "black" }}
                        className={classes.menuItem}
                        onClick={() => handleViewNote(obj)}
                      >
                        <RemoveRedEyeIcon></RemoveRedEyeIcon>
                        <div className={classes.spaceLeft}>
                          <p>View</p>
                        </div>
                      </MenuItem>
                      <MenuItem
                        sx={{ backgroundColor: "white", color: "black" }}
                        className={classes.menuItem}
                        onClick={() => handleEditNode(obj)}
                      >
                        <EditIcon></EditIcon>
                        <div className={classes.spaceLeft}>
                          <p>Edit</p>
                        </div>
                      </MenuItem>
                      <MenuItem
                        sx={{ backgroundColor: "white", color: "black" }}
                        className={classes.menuItem}
                        onClick={() => handleDeleteNote(obj)}
                      >
                        <DeleteIcon></DeleteIcon>
                        <div className={classes.spaceLeft}>
                          <p>Delete</p>
                        </div>
                      </MenuItem>
                    </Menu>
                    <Box>
                      <header className={classes.titleContainer}>
                        <h2>{obj.title}</h2>
                      </header>
                      <CardContent>{contentHtml}</CardContent>
                    </Box>
                    <CardActions>
                      <IconButton color="inherit" aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton color="inherit" aria-label="share">
                        <ShareIcon />
                      </IconButton>
                    </CardActions>
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
