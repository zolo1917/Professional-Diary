import {
  Box,
  FormLabel,
  Input,
  FormControl,
  Select,
  MenuItem,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  AvatarGroup,
  Avatar,
  Chip,
} from "@mui/material";
import { useState } from "react";
import classes from "./Project.module.css";
import ReactQuill from "react-quill";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const project_Status = [
  {
    value: "todo",
    text: "To Do",
  },
  {
    value: "inProgress",
    text: "In Progress",
  },
  {
    value: "inReview",
    text: "In Review",
  },
  {
    value: "Testing",
    text: "Testing",
  },
  {
    value: "Deployed",
    text: "Deployed",
  },
  {
    value: "done",
    text: "Done",
  },
];

function CreateProject() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [createdDate, setCreatedDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());
  const [status, setStatus] = useState(project_Status[0].value);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleMenuChange = (statusUpdate) => {
    console.log(statusUpdate.target.value);
    setStatus(statusUpdate.target.value);
  };
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <div className={classes.header}>
        <h3>Create Project</h3>
        <Select value={status} onChange={handleMenuChange}>
          {project_Status.map((statusObj) => {
            return (
              <MenuItem key={statusObj.value} value={statusObj.value}>
                {statusObj.text}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      <div className={classes.accordionContainer}>
        <Accordion defaultExpanded>
          <AccordionSummary>
            <Typography>Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.detailsContainer}>
              <div className={classes.detailsSubsection}>
                <label htmlFor="">Assigned To:</label>
                <AvatarGroup max={4} total={42}>
                  <Avatar alt="Remy Sharp" />
                  <Avatar alt="Travis Howard" />
                  <Avatar alt="Agnes Walker" />
                  <Avatar alt="Trevor Henderson" />
                </AvatarGroup>
              </div>
              <div className={classes.detailsSubsection}>
                <label htmlFor="">Created Date:</label>
                <div>
                  <Chip
                    icon={<CalendarMonthIcon />}
                    label={createdDate.toDateString()}
                  />
                </div>
              </div>
              <div className={classes.detailsSubsection}>
                <label htmlFor="">Lables: </label>
              </div>
              <div className={classes.detailsSubsection}>
                <label htmlFor="">Due Date:</label>
                <div>
                  <Chip
                    icon={<CalendarMonthIcon />}
                    label={dueDate.toDateString()}
                  />
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <Box className={classes.formContainer}>
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="description">Description</FormLabel>
          <ReactQuill
            className={classes.fullsize}
            value={formData.description}
            onChange={(value) => {
              handleChange({ target: { name: "description", value: value } });
            }}
          ></ReactQuill>
        </FormControl>
      </Box>
    </Box>
  );
}
export default CreateProject;
