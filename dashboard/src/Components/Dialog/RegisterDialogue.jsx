import {
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  FormLabel,
  TextField,
  Box,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import SignupForm from "./SignUp";
import LoginForm from "./Login";
function SignupLogin({ open, onClose, handleLoginCookie }) {
  const [value, setValue] = useState(1);

  function handleChange(event) {
    setValue(event.target.tabIndex);
  }
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle> Login / Sign up</DialogTitle>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Login" tabIndex={0} />
          <Tab label="Sign up" tabIndex={1} />
        </Tabs>
      </Box>
      <Box sx={{ width: "30rem", height: "30rem" }}>
        {value == 0 ? (
          <LoginForm
            onClose={onClose}
            handleLoginCookie={handleLoginCookie}
          ></LoginForm>
        ) : (
          <SignupForm
            onClose={onClose}
            handleLoginCookie={handleLoginCookie}
          ></SignupForm>
        )}
      </Box>
    </Dialog>
  );
}

export default SignupLogin;
