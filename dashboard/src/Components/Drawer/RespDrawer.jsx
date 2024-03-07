import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { useState } from "react";

const routesObject = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    route: "/dashboard",
  },
  {
    label: "Projects",
    icon: <DisplaySettingsIcon />,
    route: "/projects",
  },
  {
    label: "Accounts",
    icon: <AccountBalanceWalletIcon />,
    route: "/accounts",
  },
  {
    label: "Notes",
    icon: <TextSnippetIcon />,
    route: "notes",
  },
  {
    label: "Tasks",
    icon: <ChecklistIcon />,
    route: "/tasks",
  },
];

function ResponsiveDrawer({ drawerState, routeCallback }) {
  const [isOpen, setIsOpen] = useState(drawerState);

  const toggleOpenClose = () => {
    setIsOpen(!isOpen);
  };
  const handleRoute = (route) => {
    routeCallback(route);
  };
  const handleTransition = () => {};
  const drawer = (
    <Box>
      <List>
        {routesObject.map((obj, index) => (
          <ListItem key={obj.label} disablePadding>
            <ListItemButton onClick={() => handleRoute(obj.route)}>
              <ListItemIcon>{obj.icon}</ListItemIcon>
              <ListItemText primary={obj.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box id="drawerContainer">
      <CssBaseline />
      <Drawer
        variant="temporary"
        open={drawerState}
        sx={{
          display: { xs: "block", sm: "none" },
          position: "inherit",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            marginTop: "3.6em",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        container={document.getElementById("drawerContainer")}
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "inherit" },
          position: "inherit",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 200,
            marginTop: "4em",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default ResponsiveDrawer;
