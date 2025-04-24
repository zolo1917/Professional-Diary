import { Button } from "@mui/base";
import { Divider, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function TaskList({ projectIds, status }) {
  const [taskList, setTaskList] = useState([]);
  const [selectedTask, setSelectedTask] = useState({});
  const getTasksForProject = async () => {
    await getTasksForProject(projectIds).then(
      (objList) => {
        setTaskList(objList);
      },
      (error) => {
        console.log(error);
        setTaskList([]);
      },
    );
  };
  useEffect(() => {
    // getTasksForProject(projectIds);
  }, [projectIds]);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h3>TaskList</h3>
        <IconButton sx={{ margin: "1rem 1rem" }}>
          <AddIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box></Box>
    </Box>
  );
}

export default TaskList;
