import AppBar from "@mui/material/AppBar";
import classes from "./Navbar.module.css";
import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import zIndex from "@mui/material/styles/zIndex";
import SignupLogin from "../Dialog/RegisterDialogue";
import { useState } from "react";
function Navbar({ onCallBack }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const handleLoginClick = () => {
    setLoginOpen(true);
  };
  const handLoginClose = () => {
    setLoginOpen(false);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.menuButtonContainer}>
          <IconButton
            color="inherit"
            size="large"
            aria-label="menu"
            onClick={onCallBack}
            sx={{ display: { xs: "true", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, marginLeft: { xs: 0, sm: 5 } }}
        >
          Professional Diary
        </Typography>
        <div>
          <Button color="inherit" onClick={handleLoginClick}>
            Login
          </Button>
        </div>
        <SignupLogin open={loginOpen} onClose={handLoginClose} />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
