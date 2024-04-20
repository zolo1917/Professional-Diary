import { useState } from "react";
import classes from "./dialogue.module.css";
import { Button, FormControl, FormLabel, TextField } from "@mui/material";
function SignupForm({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  function handleLogin() {
    // handle the login logic here
    handleClose();
  }
  function handleClose() {
    onClose();
  }
  return (
    <>
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
        <div className={classes.formInputDiv}>
          <FormLabel className={classes.formInputLabel}>
            Confirm Password
          </FormLabel>
          <TextField
            type="password"
            variant="filled"
            className={classes.formInputField}
            onChange={(eventObj) => {
              console.log(eventObj);
              return setConfirmPassword();
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
    </>
  );
}

export default SignupForm;
