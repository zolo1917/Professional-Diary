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
import DashboardIcon from "@mui/icons-material/Dashboard";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import ChecklistIcon from "@mui/icons-material/Checklist";

const routesObject = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    route: "/app/dashboard",
  },
  {
    label: "Projects",
    icon: <DisplaySettingsIcon />,
    route: "/app/projects",
  },
  {
    label: "Notes",
    icon: <TextSnippetIcon />,
    route: "/app/notes",
  },
  {
    label: "Tasks",
    icon: <ChecklistIcon />,
    route: "/app/tasks",
  },
];

function ResponsiveDrawer({ drawerState, routeCallback }) {
  const handleRoute = (route) => {
    routeCallback(route);
  };
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
    <Box id="drawerContainer" sx={{ height: "100%" }}>
      <CssBaseline />
      <Drawer
        variant="temporary"
        open={drawerState}
        sx={{
          display: { xs: "block", sm: "block", md: "none", lg: "none" },
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
        open="true"
        sx={{
          display: { xs: "none", sm: "none", md: "block", lg: "block" },
          height: "100%",
          position: "static",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
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
