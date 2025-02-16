import {
  Box,
  Button,
  CssBaseline,
  Dialog,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { useEffect, useState } from "react";
import { getProjectsForUser } from "../../Services/ProjectService";
import Divider from "@mui/material/Divider";
import classes from "./RespDrawer.module.css";
import AddIcon from "@mui/icons-material/Add";
import CreateProject from "../Projects/CreateProject";

const routesObject = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    route: "/app/dashboard",
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
  const [projectList, setProjectList] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  useEffect(() => {
    // fetch the project list
    (async () => {
      const resp = await getProjectsForUser();
      if (resp) {
        console.log(resp);
        setProjectList(resp);
      }
    })();
    // set the Project list
  }, []);
  const handleRoute = (route) => {
    routeCallback(route);
  };
  const handleProjectNav = (projectId) => {
    console.log(`Navigating to project ${projectId}`);
  };
  const refreshProjects = () => {
    setIsDialogOpen(false);
    (async () => {
      const resp = await getProjectsForUser();
      if (resp) {
        console.log(resp);
        setProjectList(resp);
      }
    })();
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
      <Divider />
      <div className={classes.projectsContainer}>
        <div className={classes.projectListHeader}>
          <h4>Projects</h4>
          <Button
            className={classes.addProjectButton}
            variant="text"
            onClick={() => setIsDialogOpen(true)}
          >
            <AddIcon />
          </Button>
        </div>
        {projectList.length > 0 ? (
          <div id="projectList">
            {projectList.map((obj) => (
              <ListItem key={obj.id} disablePadding>
                <ListItemButton onClick={() => handleProjectNav(obj.id)}>
                  {/* <ListItemIcon>{obj.icon}</ListItemIcon> */}
                  <ListItemText primary={obj.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </div>
        ) : (
          <div> No Projects found</div>
        )}
      </div>
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
      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={isDialogOpen}
        onClose={refreshProjects}
      >
        <CreateProject />
      </Dialog>
    </Box>
  );
}

export default ResponsiveDrawer;
