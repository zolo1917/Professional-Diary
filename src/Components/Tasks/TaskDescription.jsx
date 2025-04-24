import { Divider, Box, IconButton, Typography } from "@mui/material";
import classes from "./TaskStyle.module.css";
function TaskDescription() {
  const task = [
    {
      id: 1,
      title: "Sample Task",
      description: "This is a sample task description",
      status: "In Progress",
      priority: "High",
      assignee: "John Doe",
      dueDate: "2023-02-28",
    },
  ];

  return (
    <Box className={classes.fullsize}>
      <header className={classes.headerContainer}>
        <h4>Project Title</h4>
        <IconButton>Edit</IconButton>
      </header>
      <Divider></Divider>
      <Box id="taskDetailsBody">
        <Box id="description_container">
          <Typography> Description :</Typography>
        </Box>
        <Box id="details_container"></Box>
        <Box id="work_log_container"></Box>
      </Box>
    </Box>
  );
}

export default TaskDescription;
