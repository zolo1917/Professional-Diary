import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TaskList from "./TaskList";
import TaskDescription from "./TaskDescription";
function Tasks({ handlelogout }) {
  // const [filter, setFilter] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [projects, setProjects] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const handleSearch = () => {
    console.log({
      searchTerm,
      project: selectedProject,
      status: selectedStatus,
    });
  };
  useEffect(() => {
    setProjects([]);
    setStatuses([]);
  }, []);

  const handleKeyPress = (event) => {
    handleSearch();
  };
  return (
    <Box sx={{ height: "90vh" }}>
      <Stack direction="row" spacing={4}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            label="Search JIRA issues"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton
                  variant="contained"
                  color="primary"
                  onClick={handleKeyPress}
                >
                  <SearchIcon color="action" />
                </IconButton>
              ),
            }}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2, width: "-moz-available" }}>
          <FormControl fullWidth>
            <InputLabel>Project</InputLabel>
            <Select
              value={selectedProject}
              label="Project"
              onChange={(e) => setSelectedProject(e.target.value)}
            >
              <MenuItem value="">All Projects</MenuItem>
              {projects.map((project) => (
                <MenuItem key={project.id} value={project.id}>
                  {project.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={selectedStatus}
              label="Status"
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <MenuItem value="">All Statuses</MenuItem>
              {statuses.map((status) => (
                <MenuItem key={status.id} value={status.id}>
                  {status.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Stack>
      <Divider sx={{ margin: "1rem 0rem" }} />
      <Stack direction={"row"} sx={{ width: "100%" }}>
        <Box id="issueListContainer" sx={{ width: "30%" }}>
          <TaskList />
        </Box>
        <Divider orientation="vertical" />
        <Box id="descriptionContainer" sx={{ width: "68%" }}>
          <TaskDescription />
        </Box>
      </Stack>
    </Box>
  );
}

export default Tasks;
