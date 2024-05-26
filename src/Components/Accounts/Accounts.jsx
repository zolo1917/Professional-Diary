import {
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";

function Accounts() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} sx={{ height: "30vh" }}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Accounts
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4} sx={{ height: "30vh" }}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Cards
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary={"XXXX23241"}
                  secondary={"new Text2"}
                ></ListItemText>
                <Typography>5323.23</Typography>
              </ListItem>
              <Divider></Divider>
            </List>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Loans
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} sx={{ height: "60vh" }}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Expense Analytics
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} sx={{ height: "50vh" }}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Budget Analytics
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Accounts;
