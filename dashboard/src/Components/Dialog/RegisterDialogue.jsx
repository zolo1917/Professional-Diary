import {
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";
import { useState } from "react";
import classes from "./dialogue.module.css";
function SignupLogin({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin() {
    // handle the login logic here
    handleClose();
  }
  function handleClose() {
    onClose();
  }
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle> Login / Sign up</DialogTitle>
      <FormControl className={classes.loginForm}>
        <div className={classes.formInputDiv}>
          <FormLabel className={classes.formInputLabel}>Email</FormLabel>
          <TextField
            type="text"
            variant="filled"
            className={classes.formInputField}
            onChange={(event) => {
              console.log(event);
              setEmail(event.email);
            }}
          />
        </div>
        <div className={classes.formInputDiv}>
          <FormLabel className={classes.formInputLabel}>Password</FormLabel>
          <TextField
            type="password"
            variant="filled"
            className={classes.formInputField}
            onChange={(eventObj) => {
              console.log(eventObj);
              return setPassword();
            }}
          />
        </div>
        <div className={classes.formButtonContainer}>
          <Button
            variant="outlined"
            size="large"
            type="submit"
            onClick={handleClose}
          >
            Cancle
          </Button>
          <Button
            variant="contained"
            size="large"
            type="submit"
            onClick={handleLogin}
          >
            Submit
          </Button>
        </div>
      </FormControl>
    </Dialog>
  );
}

export default SignupLogin;
