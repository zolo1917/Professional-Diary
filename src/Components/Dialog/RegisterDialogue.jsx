import { Dialog, DialogTitle, Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import SignupForm from "./SignUp";
import LoginForm from "./Login";
function SignupLogin({ open, onClose, handleLoginCookie }) {
  const [value, setValue] = useState(0);

  function handleChange(event) {
    setValue(event.target.tabIndex);
  }
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{ borderRadius: "15px", width: "auto", height: "auto" }}
    >
      <DialogTitle> Login / Sign up</DialogTitle>
      <Box sx={{ borderBottom: 1, borderColor: "divider", width: "inherit" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Login" tabIndex={0} />
          <Tab label="Sign up" tabIndex={1} />
        </Tabs>
      </Box>
      <Box sx={{ height: "auto" }}>
        {value === 0 ? (
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
