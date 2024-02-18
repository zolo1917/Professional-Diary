import AppBar from "@mui/material/AppBar";
import classes from "./Navbar.module.css";
import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import zIndex from "@mui/material/styles/zIndex";
function Navbar({onCallBack}) {
  return (
      <AppBar classes={{zIndex: "1250"}}>
        <Toolbar>
          <div className={classes.menuButtonContainer}>
            <IconButton color="inherit" size="large" aria-label="menu" onClick={onCallBack} sx={{display : {xs: "true", sm: "none"}}}>
              <MenuIcon />
            </IconButton>
          </div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: {xs: 0, sm: 5} }}>
            Professional Diary
          </Typography>
          <div>
            <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
  );
}

export default Navbar;
