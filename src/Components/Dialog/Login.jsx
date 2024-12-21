import { useState } from "react";
import { Box, Button, FormControl, FormLabel, TextField } from "@mui/material";
import classes from "./dialogue.module.css";
import { login } from "../../Services/UserService";
function LoginForm({ onClose, handleLoginCookie }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleLogin() {
    // handle the login logic here
    const resp = await login(email, password);
    if (resp) {
      handleLoginCookie({
        id: resp.id,
        accessToken: resp.accessToken,
        refreshToken: resp.refreshToken,
      });
    }
    handleClose();
  }
  function handleClose() {
    onClose();
  }
  return (
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
          onChange={(event) => {
            return setPassword(event.target.value);
          }}
        />
      </Box>
      <Box
        sx={{
          display: "inline-flex",
          width: "65%",
          padding: "1.5rem 1.5rem",
          justifyContent: "space-around",
        }}
      >
        <Button
          variant="outlined"
          size="large"
          type="submit"
          sx={{}}
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
      </Box>
    </FormControl>
  );
}

export default LoginForm;
