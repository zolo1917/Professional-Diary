import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#a3a3a3",
      light: "#c0bfc5",
      // contrastText: "#403f46",
      contrastText: "white",
    },
    secondary: {
      main: "#6c757d",
      light: "#d6d8db",
      contrastText: "#53585f",
    },
    error: {
      main: "#f674ad",
      light: "#fcd8e8",
      contrastText: "#c60f60",
    },
    warning: {
      main: "#f0864a",
      light: "#fbddcc",
      contrastText: "#b94c0f",
    },
    info: {
      main: "#87baf5",
      light: "#ddecfc",
      contrastText: "#126ac8;",
    },
    success: {
      main: "#8ac3a3",
      light: "#deeee5",
      contrastText: "#468762",
    },
    background: {
      default: "#1f1c2f",
      paper: "#1f1c2f",
    },
    text: {
      primary: "#ffffff",
      secondary: "#e5e5e5",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      "Roboto Mono",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
