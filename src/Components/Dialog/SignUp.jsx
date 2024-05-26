import { useState } from "react";
import classes from "./dialogue.module.css";
import { Box, Button, FormControl, FormLabel, TextField } from "@mui/material";
import { signup } from "../../Services/UserService";
function SignupForm({ onClose, handleLoginCookie }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  async function handleLogin() {
    // handle the login logic here
    if (password === confirmPassword) {
      let resp = await signup(email, password);
      if (resp) {
        handleLoginCookie({
          id: resp.id,
          accessToken: resp.accessToken,
          refreshToken: resp.refreshToken,
        });
      }
      handleClose();
    } else {
      handleClose();
    }
  }
  function handleClose() {
    onClose();
  }
  return (
    <>
      <FormControl className={classes.loginForm}>
        <Box
          sx={{
            width: "90%",
            padding: "3%",
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "center",
          }}
        >
          <FormLabel className={classes.formInputLabel}>Email</FormLabel>
          <TextField
            type="text"
            variant="filled"
            className={classes.formInputField}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </Box>
        <Box
          sx={{
            width: "90%",
            padding: "3%",
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "center",
          }}
        >
          <FormLabel className={classes.formInputLabel}>Password</FormLabel>
          <TextField
            type="password"
            variant="filled"
            className={classes.formInputField}
            onChange={(eventObj) => {
              return setPassword(eventObj.target.value);
            }}
          />
        </Box>
        <Box
          sx={{
            width: "90%",
            padding: "3%",
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "center",
          }}
        >
          <FormLabel className={classes.formInputLabel}>
            Confirm Password
          </FormLabel>
          <TextField
            type="password"
            variant="filled"
            className={classes.formInputField}
            onChange={(eventObj) => {
              return setConfirmPassword(eventObj.target.value);
            }}
          />
        </Box>
        <Box
          sx={{
            width: "90%",
            padding: "3%",
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "center",
          }}
        >
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
            Sign Up
          </Button>
        </Box>
      </FormControl>
    </>
  );
}

export default SignupForm;
