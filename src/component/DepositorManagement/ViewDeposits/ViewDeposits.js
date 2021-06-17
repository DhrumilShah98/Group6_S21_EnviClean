import dummyViewData from "./DummyDepositData";
import { Card, CardContent, Typography, Grid, Button } from "@material-ui/core";
import useStyles from "./styles.js";
function ViewDeposits() {
  const classes = useStyles();
  console.log(dummyViewData.length);

  return (
    <div>
      <Typography variant="h6">My Deposits</Typography>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
        style={{ marginTop: 5, marginBottom: 10 }}
      >
        {dummyViewData.map((data) => {
          if (data.length === 0) {
            return (
              <Typography variant="body1" color={"textSecondary"} component="p">
                "No Deposits Scheduled"
              </Typography>
            );
          } else {
            return (
              <Grid key={data._id} item xs={11} sm={6} md={5}>
                <Card className={classes.card} elevation={6}>
                  <CardContent>
                    <Typography
                      align="left"
                      gutterBottom
                      variant="body2"
                      color={"textSecondary"}
                      component="p"
                    >{`TaskName : ${data.taskname}`}</Typography>
                    <Typography
                      variant="body2"
                      color={"textSecondary"}
                      component="p"
                      noWrap
                      gutterBottom
                    >{`Garbage Type : ${data.garbagetype}`}</Typography>
                    <Typography
                      variant="body2"
                      color={"textSecondary"}
                      component="p"
                      gutterBottom
                    >{`Address : ${data.address}`}</Typography>
                    <Typography
                      variant="body2"
                      color={"textSecondary"}
                      component="p"
                      gutterBottom
                    >{`Scheduled : ${data.schedule}`}</Typography>
                  </CardContent>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    style={{ marginBottom: 3 }}
                  >
                    Modify
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                  >
                    Delete
                  </Button>
                </Card>
              </Grid>
            );
          }
        })}
      </Grid>
    </div>
  );
}
export default ViewDeposits;