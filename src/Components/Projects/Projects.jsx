/**
 *
 * This is where we will be designing the dashbaord page and will be working on the project management aspect of things
 * we will be working on the page layout and outlook
 */

import { Box, Divider, Stack } from "@mui/material";
import classes from "./Project.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProjectById } from "../../Services/ProjectService";

function Projects({ handleLogout }) {
  const { projectId } = useParams();
  const [projectDetails, setProjectDetails] = useState({});
  const fetchProject = async () => {
    await getProjectById(projectId)
      .then((resp) => {
        setProjectDetails(resp);
      })
      .catch((error) => {
        console.log(error);
        setProjectDetails({});
      });
  };
  useEffect(() => {
    fetchProject();
  }, [projectId]);
  const handleProjectChange = (event) => {
    console.log(event.target.value);
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
        ></Stack>
      </div>
      <h1>{projectDetails.name}</h1>
      <div className={classes.dividerContainer}>
        <Divider />
      </div>
    </Box>
  );
}

export default Projects;
