import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

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
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              {task.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {task.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <Typography variant="body2" color="textSecondary">
                  Status: {task.status}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="textSecondary">
                  Priority: {task.priority}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="textSecondary">
                  Assignee: {task.assignee}
                </Typography>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="h2">
          Due Date: {task.dueDate}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default TaskDescription;
