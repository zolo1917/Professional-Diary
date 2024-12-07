/**
 *
 * This is where we will be designing the dashbaord page and will be working on the project management aspect of things
 * we will be working on the page layout and outlook
 */

import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import classes from "./Project.module.css";
import { useEffect, useState } from "react";

function Projects(handleLogout) {
  const [projectList, setProjectList] = useState([
    "testProject1",
    "testProject2",
    "testProject3",
  ]);
  useEffect(() => {
    setProjectList(["testProject1", "testProject2", "testProject3"]);
  }, []);
  const [project, setProject] = useState("");
  const handleProjectChange = (event) => {
    setProject(event.target.value);
  };
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <div className={classes.titleContainer}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "0.5rem",
          }}
        >
          <h1> Project Dashboard </h1>
          <FormControl className={classes.projectSelector}>
            <InputLabel id="projectSelectorLabel"> Project</InputLabel>
            <Select
              value={project}
              labelId="projectSelectorLabel"
              id="projectSelector"
              onChange={handleProjectChange}
              autowidth
              label="Project"
            >
              {projectList?.map((projectData) => {
                return <MenuItem value={projectData}>{projectData}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Stack>
      </div>
      <div className={classes.dividerContainer}>
        <Divider />
      </div>
      <div
        className={`${classes.contentBoxContainer} ${classes.greybackgroundColor}`}
      >
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <div className={classes.widgetContainer1}>
            <Box className={classes.recentProjectsBox}>
              <header className={classes.recentsHeader}>
                <h4>Recents</h4>
              </header>
              <Divider />
            </Box>
          </div>
          <div className={classes.widgetContainer2}>
            <h2>This is the second content</h2>
          </div>
        </Stack>
      </div>
    </Box>
  );
}

export default Projects;
