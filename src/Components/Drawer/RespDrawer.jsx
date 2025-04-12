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
import {
  getProjectsForUser,
  projectList$,
} from "../../Services/ProjectService";
import Divider from "@mui/material/Divider";
import classes from "./RespDrawer.module.css";
import AddIcon from "@mui/icons-material/Add";
import CreateProject from "../Projects/CreateProject";
import EditIcon from "@mui/icons-material/Edit";

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
  const [projectObj, setProjectObj] = useState({});
  useEffect(() => {
    // fetch the project list
    (async () => {
      const resp = await getProjectsForUser();
      if (resp) {
        console.log(resp);
        projectList$.next(resp);
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
    routeCallback(`/app/projects/${projectId}`);
  };
  const editProject = (projectObject) => {
    console.log(projectObject);
    setIsDialogOpen(true);
    setProjectObj(projectObject);
  };

  const handleCreateNewProject = () => {
    setProjectObj({});
    setIsDialogOpen(true);
  };

  const refreshProjects = () => {
    setIsDialogOpen(false);
    (async () => {
      const resp = await getProjectsForUser();
      if (resp) {
        console.log(resp);
        projectList$.next(resp);
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
            onClick={handleCreateNewProject}
          >
            <AddIcon />
          </Button>
        </div>
        {projectList.length > 0 ? (
          <div className={classes.projectListContainer} id="projectList">
            {projectList.map((obj) => (
              <ListItem key={obj.id} disablePadding>
                <ListItemButton onClick={() => handleProjectNav(obj.id)}>
                  <ListItemText primary={obj.name} />
                </ListItemButton>
                <Button
                  onClick={() => {
                    editProject(obj);
                  }}
                >
                  <EditIcon />
                </Button>
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
            width: "15rem",
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
            width: "15rem",
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
        <CreateProject projectData={projectObj} />
      </Dialog>
    </Box>
  );
}

export default ResponsiveDrawer;
