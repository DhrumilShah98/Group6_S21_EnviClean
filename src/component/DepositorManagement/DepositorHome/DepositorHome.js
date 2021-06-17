import CreateDeposit from "../CreateDeposits/CreateDepositForm";
import useStyles from "./styles.js";
import { Container, Grow, Grid } from "@material-ui/core";
import ViewDeposits from "../ViewDeposits/ViewDeposits";

function DepositorHome() {
    const classes = useStyles();
  return (
    <Grow in>
    <Container  style={{ marginTop: 30 }}>
    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch">
    <Grid item xs={12} md={7}>
        <ViewDeposits></ViewDeposits>
    </Grid>
    <Grid item xs={12} md={4}>
      <CreateDeposit></CreateDeposit>
    </Grid>
    </Grid>
    </Container>
    </Grow>
  );
}
export default DepositorHome;
