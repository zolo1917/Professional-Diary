import {
  Box,
  Card,
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
import { deleteNote, updateNote } from "../../Services/NotesService";
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
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";
const NotesList = ({
  notes,
  handleNoteSelection,
  handleUpdateList,
  onDelete,
}) => {
  const [tabValue, setTabValue] = useState("0");
  const [show, setShow] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [menuObj, setMenuObj] = useState({});
  const open = Boolean(openMenu);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    handleUpdateList();
    setShow(false);
  };
  const handleMenuOpen = (event, obj) => {
    setMenuObj(obj);
    setOpenMenu(event.currentTarget);
  };
  const handleMenuClose = (event) => {
    setOpenMenu(null);
  };

  const handleViewNote = () => {
    handleMenuClose();
  };

  const handleEditNode = () => {
    handleNoteSelection(menuObj);
    handleMenuClose();
  };

  const handleDeleteNote = useCallback(() => {
    deleteNote(menuObj.id);
    handleMenuClose();
    onDelete();
  }, [onDelete, menuObj.id]);
  useEffect(() => {
    if (notes.length > 0) {
      setShow(true);
    }
  }, [notes]);

  const handleFav = useCallback(
    (obj) => {
      obj.isFavourite = !obj.isFavourite;
      updateNote(obj.id, obj);
      onDelete();
    },
    [onDelete]
  );

  const handlePin = useCallback(
    (obj) => {
      obj.isPinned = !obj.isPinned;
      updateNote(obj.id, obj);
      onDelete();
    },
    [onDelete]
  );

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        height: "80%",
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
              sx={{
                margin: "1rem",
                width: "100%",
                maxHeight: "30rem",
                overflowY: "auto",
              }}
              direction="row"
              spacing={2}
              useFlexGap
              flexWrap="wrap"
            >
              {notes?.map((obj) => {
                const contentHtml = parse(obj.text);
                return (
                  <Card
                    key={obj.id}
                    sx={{
                      width: "18rem",
                      "-webkit-transition": "background 0.5s",
                      transition: "background 0.5s",
                      ":hover": {
                        background: "black",
                        color: "white",
                      },
                      height: "20rem",
                    }}
                  >
                    <CardHeader
                      key={obj.id}
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
                          onClick={(event) => {
                            handleMenuOpen(event, obj);
                          }}
                        >
                          <MoreVertIcon />
                        </IconButton>
                      }
                    ></CardHeader>
                    <Box>
                      <header className={classes.titleContainer}>
                        <h2 className={classes.title}>{obj.title}</h2>
                      </header>
                      <CardContent
                        sx={{
                          height: "6.5rem",
                          maxHeight: "6.5 rem",
                          overflow: "clip",
                        }}
                      >
                        {contentHtml}
                      </CardContent>
                    </Box>
                    <CardActions sx={{ margin: "0.5rem" }}>
                      <IconButton
                        color="inherit"
                        aria-label="add to favorites"
                        onClick={() => {
                          handleFav(obj);
                        }}
                      >
                        {obj.isFavourite ? (
                          <FavoriteIcon />
                        ) : (
                          <FavoriteBorderIcon />
                        )}
                      </IconButton>
                      <IconButton color="inherit" aria-label="share">
                        <ShareIcon />
                      </IconButton>
                      <IconButton
                        color="inherit"
                        aria-label="pin"
                        onClick={() => handlePin(obj)}
                      >
                        {obj.isPinned ? (
                          <PushPinIcon />
                        ) : (
                          <PushPinOutlinedIcon />
                        )}
                      </IconButton>
                    </CardActions>
                  </Card>
                );
              })}
              <Menu open={open} onClose={handleMenuClose} anchorEl={openMenu}>
                <MenuItem
                  sx={{ backgroundColor: "white", color: "black" }}
                  className={classes.menuItem}
                  onClick={() => handleViewNote()}
                >
                  <RemoveRedEyeIcon></RemoveRedEyeIcon>
                  <div className={classes.spaceLeft}>
                    <p>View</p>
                  </div>
                </MenuItem>
                <MenuItem
                  sx={{ backgroundColor: "white", color: "black" }}
                  className={classes.menuItem}
                  onClick={() => handleEditNode()}
                >
                  <EditIcon></EditIcon>
                  <div className={classes.spaceLeft}>
                    <p>Edit</p>
                  </div>
                </MenuItem>
                <MenuItem
                  sx={{ backgroundColor: "white", color: "black" }}
                  className={classes.menuItem}
                  onClick={() => handleDeleteNote()}
                >
                  <DeleteIcon></DeleteIcon>
                  <div className={classes.spaceLeft}>
                    <p>Delete</p>
                  </div>
                </MenuItem>
              </Menu>
            </Stack>
          </div>
        </Fade>
      </Card>
    </Box>
  );
};

export default NotesList;
