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
  IconButton,
} from "@mui/material";
import { useRef, useState } from "react";
import classes from "./Project.module.css";
import ReactQuill from "react-quill";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EditIcon from "@mui/icons-material/Edit";
import PublishIcon from "@mui/icons-material/Publish";
import CancelIcon from "@mui/icons-material/Cancel";
import { createProject, updateProject } from "../../Services/ProjectService";
import { projectStatusEnum } from "../../Enums/StatusEnum";
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

function CreateProject({ projectData }) {
  const [formData, setFormData] = useState({
    name: projectData ? projectData.name : "",
    description: projectData ? projectData.description : "",
    status: projectData ? projectData.status : "active",
    label: projectData ? projectData?.label : [],
    assigned: projectData ? projectData?.assignes : [],
    dueDate: projectData ? new Date(projectData?.dueDate) : new Date(),
    createdDate: projectData ? new Date(projectData?.createdAt) : new Date(),
  });
  const [createdDate, setCreatedDate] = useState(
    projectData ? projectData.createdDate : new Date(),
  );
  const [dueDate, setDueDate] = useState(
    projectData ? projectData.dueDate : new Date(),
  );
  const [status, setStatus] = useState(formData ? formData.status : "");
  const [name, setName] = useState(formData ? formData.name : "");
  const [description, setDescription] = useState(
    formData ? formData.description : "",
  );
  const [editTitle, setEditTitle] = useState(formData.name ? false : true);
  const [editDescription, setEditDescription] = useState(false);
  const formDataRef = useRef(formData);
  const handlePublish = (e) => {
    e.preventDefault();
    if (editTitle) {
      const newFormData = { ...formDataRef.current, ["name"]: name };
      formDataRef.current = newFormData;
      setFormData((prevState) => ({ ...prevState, ["name"]: name }));
      setEditTitle(false);
    }
    if (editDescription) {
      const newFormData = {
        ...formDataRef.current,
        ["description"]: description,
      };
      formDataRef.current = newFormData;
      setFormData((prevState) => ({
        ...prevState,
        ["description"]: description,
      }));
      setEditDescription(false);
    }
    if (projectData && projectData.id) {
      updateProject(projectData.id, formDataRef.current);
    } else {
      createProject(formDataRef.current);
    }
  };
  const handleMenuChange = (statusUpdate) => {
    formData.status = statusUpdate.target.value;
    setStatus(statusUpdate.target.value);
  };
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <div className={classes.header}>
        {!editTitle ? (
          <div className={classes.titleFormControl}>
            <div className={classes.titleContainer}>
              <h3>{formData.name}</h3>
            </div>
            <IconButton>
              <EditIcon
                onClick={() => {
                  setEditTitle(true);
                }}
              />
            </IconButton>
          </div>
        ) : (
          <div className={classes.titleFormControl}>
            <FormControl className={classes.titleContainer}>
              <FormLabel htmlFor="name">Name:</FormLabel>
              <Input
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <IconButton onClick={handlePublish}>
              <PublishIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                setEditTitle(false);
              }}
            >
              <CancelIcon />
            </IconButton>
          </div>
        )}

        <Select value={status} onChange={handleMenuChange}>
          {projectStatusEnum.map((statusObj) => {
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
                    label={formData.createdDate.toDateString()}
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
                    label={formData.dueDate.toDateString()}
                  />
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <Box className={classes.formContainer}>
        {!editDescription ? (
          <div className={classes.descContainer}>
            <div className={classes.row}>
              <h5>Description</h5>
              <IconButton>
                <EditIcon
                  onClick={() => {
                    setEditDescription(true);
                  }}
                />
              </IconButton>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: formData.description }}
            ></div>
          </div>
        ) : (
          <div className={classes.descContainer}>
            <FormControl className={classes.fullsize}>
              <FormLabel htmlFor="description">Description</FormLabel>
              <ReactQuill
                className={classes.fullsize}
                value={description}
                onChange={(value) => {
                  setDescription(value);
                }}
              ></ReactQuill>
            </FormControl>
            <div className="row">
              <IconButton onClick={handlePublish}>
                <PublishIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  setEditDescription(false);
                }}
              >
                <CancelIcon />
              </IconButton>
            </div>
          </div>
        )}
      </Box>
    </Box>
  );
}
export default CreateProject;
