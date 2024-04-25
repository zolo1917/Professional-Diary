import AppBar from "@mui/material/AppBar";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SignupLogin from "../Dialog/RegisterDialogue";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
function Navbar({ onCallBack, handleLoginCookie, userDetails, handleLogout }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLoginClick = () => {
    setLoginOpen(true);
  };
  const handLoginClose = () => {
    setLoginOpen(false);
  };
  const handleLoginSuccess = (data) => {
    setUserLoggedIn(true);
    handleLoginCookie(data);
    navigate("/app");
  };
  const handleLogoutClick = () => {
    handleLogout();
    navigate("/");
    setUserLoggedIn(false);
    handleClose();
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: "primary" }}>
      <Toolbar>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <IconButton
            color="inherit"
            size="large"
            aria-label="menu"
            onClick={onCallBack}
            sx={{ display: { xs: "true", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Professional Diary
        </Typography>
        <div>
          {userLoggedIn ? (
            <>
              <Button
                onClick={handleClick}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar></Avatar>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleLoginClick}
            >
              Login
            </Button>
          )}
        </div>
        <SignupLogin
          open={loginOpen}
          onClose={handLoginClose}
          handleLoginCookie={handleLoginSuccess}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
