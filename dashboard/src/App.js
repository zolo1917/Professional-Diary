import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ResponsiveDrawer from "./Components/Drawer/RespDrawer";
import { useState } from "react";
import Homepage from "./Components/Homepage/Homepage";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import Projects from "./Components/Projects/Projects";
import Accounts from "./Components/Accounts/Accounts";
import Tasks from "./Components/Tasks/Tasks";
import Notes from "./Components/Notes/Notes";
import { Box, Container, Divider, Stack } from "@mui/material";
function App() {
  const [drawerState, setDrawerState] = useState(true);
  const navigate = useNavigate();
  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <Homepage />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/accounts",
      element: <Accounts />,
    },
    {
      path: "/notes",
      element: <Notes />,
    },
    {
      path: "/tasks",
      element: <Tasks />,
    },
  ]);
  const handleDrawerToggle = () => {
    setDrawerState((drawerState) => {
      return !drawerState;
    });
  };
  const handleRoute = (route) => {
    navigate(route);
    console.log(route);
  };
  return (
    <Box>
      <Navbar onCallBack={handleDrawerToggle}></Navbar>
      <Stack direction="row" justifyContent={"start"}>
        <Box sx={{ width: { xs: "0", sm: "10.5rem" } }}>
          <ResponsiveDrawer
            drawerState={drawerState}
            routeCallback={handleRoute}
          ></ResponsiveDrawer>
        </Box>
        <Box sx={{ width: "80%", margin: "1%" }}>
          <Routes>
            <Route path="/dashboard" element={<Homepage />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/accounts" element={<Accounts />}></Route>
            <Route path="/notes" element={<Notes />}></Route>
            <Route path="/tasks" element={<Tasks />}></Route>
          </Routes>
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
