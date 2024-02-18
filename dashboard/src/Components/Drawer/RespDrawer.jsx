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
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";

const routesObject = [
  {
    label: "Dashboard",
    icon : <InboxIcon />,
    route: "/dasboard"
  },{
    label: "Projects",
    icon : <InboxIcon />,
    route: "/projects"
  },
  {
    label: "Accounts",
    icon : <InboxIcon />,
    route: "/accounts"
  },
  {
    label: "Tasks",
    icon : <InboxIcon />,
    route: "/tasks"
  }  
]

function ResponsiveDrawer({ drawerState, routeCallback }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenClose = () => {
    setIsOpen(!isOpen);
  };
  const handleRoute = (route) =>{
    routeCallback(route)
  }
  const handleTransition = () => {};
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const drawer = (
    <div>
      <List>
        {routesObject.map((obj, index) => (
          <ListItem key={obj.label} disablePadding>
            <ListItemButton onClick={()=>handleRoute(obj.route)}>
              <ListItemIcon>
                {obj.icon}
              </ListItemIcon>
              <ListItemText primary={obj.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box id="drawerContainer">
      <CssBaseline />
      <Drawer
        variant="temporary"
        open={drawerState}
        hideBackdrop={true}
        sx={{
          display: {xs: "block", sm: "none"},
          position:"inherit",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
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
          display: {xs: "none", sm: "inherit"},
          position:"inherit",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
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
