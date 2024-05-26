import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ResponsiveDrawer from "./Components/Drawer/RespDrawer";
import { useEffect, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Projects from "./Components/Projects/Projects";
import Accounts from "./Components/Accounts/Accounts";
import Tasks from "./Components/Tasks/Tasks";
import Notes from "./Components/Notes/Notes";
import { Box, Stack } from "@mui/material";
import Cookies from "js-cookie";
import Homepage from "./Components/Homepage/Homepage";
function App() {
  const [drawerState, setDrawerState] = useState(true);
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(Cookies.get("userDetails"));
  const handleLoginCookie = (userDetails) => {
    console.log("Settings cookie");
    Cookies.set("userDetails", JSON.stringify(userDetails));
  };
  const handleLogout = () => {
    Cookies.remove("userDetails");
    setUserDetails(undefined);
  };
  useEffect(() => {
    if (userDetails) {
      navigate("/app");
    } else {
      navigate("/homepage");
    }
  }, [userDetails]);
  const handleDrawerToggle = () => {
    setDrawerState((drawerState) => {
      return !drawerState;
    });
  };
  const handleRoute = (route) => {
    navigate(route);
  };
  return (
    <Box>
      <Navbar
        onCallBack={handleDrawerToggle}
        handleLoginCookie={handleLoginCookie}
        userDetails={userDetails}
        handleLogout={handleLogout}
      ></Navbar>
      <Routes>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="*" element={<Navigate to="/homepage" />} />
        <Route
          path="/app/*"
          element={
            <Stack direction="row" justifyContent={"start"}>
              <Box sx={{ width: { xs: "0", sm: "10.5rem" } }}>
                <ResponsiveDrawer
                  drawerState={drawerState}
                  routeCallback={handleRoute}
                ></ResponsiveDrawer>
              </Box>
              <Box sx={{ width: "86%", margin: "1%" }}>
                <Routes>
                  <Route path="/homepage" element={<Homepage />}></Route>
                  <Route path="/dashboard" element={<Dashboard />}></Route>
                  <Route path="/projects" element={<Projects />}></Route>
                  <Route path="/accounts" element={<Accounts />}></Route>
                  <Route path="/notes" element={<Notes />}></Route>
                  <Route path="/tasks" element={<Tasks />}></Route>
                </Routes>
                <Outlet />
              </Box>
            </Stack>
          }
        ></Route>
      </Routes>
    </Box>
  );
}

export default App;
