import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ResponsiveDrawer from "./Components/Drawer/RespDrawer";
import { useEffect, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Projects from "./Components/Projects/Projects";
import Tasks from "./Components/Tasks/Tasks";
import Notes from "./Components/Notes/Notes";
import { Box, Stack } from "@mui/material";
import Cookies from "js-cookie";
import Homepage from "./Components/Homepage/Homepage";
import { userStore } from "./store";
function App() {
  const [drawerState, setDrawerState] = useState(true);
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(Cookies.get("userDetails"));
  const handleLoginCookie = (userDetails) => {
    Cookies.set("userDetails", JSON.stringify(userDetails));
    setUserDetails(userDetails);
  };
  const handleLogout = () => {
    Cookies.remove("userDetails");
    setUserDetails(undefined);
  };
  useEffect(() => {
    if (userDetails) {
      userStore.next({ userDetails });
      navigate("/app");
    } else {
      userStore.next({});
      navigate("/homepage");
    }
    // eslint-disable-next-line
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
              <Box
                sx={{
                  width: { xs: "0", sm: "0", md: "10.5rem", lg: "10.5rem" },
                  height: "100%",
                }}
              >
                <ResponsiveDrawer
                  drawerState={drawerState}
                  routeCallback={handleRoute}
                ></ResponsiveDrawer>
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", sm: "100%", md: "86%", lg: "86%" },
                  margin: "1%",
                  marginTop: "5.25rem",
                  height: "100%",
                }}
              >
                <Routes>
                  <Route path="/homepage" element={<Homepage />}></Route>
                  <Route
                    path="/dashboard"
                    element={<Dashboard handleLogout={handleLogout} />}
                  ></Route>
                  <Route
                    path="/notes"
                    element={<Notes handleLogout={handleLogout} />}
                  ></Route>
                  <Route
                    path="/tasks"
                    element={<Tasks handleLogout={handleLogout} />}
                  ></Route>
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
