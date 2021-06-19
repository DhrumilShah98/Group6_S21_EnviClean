import React, { useState } from "react";
import dummyCollectionData from "./DummyCollectionData";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
  Button,
} from "@material-ui/core";
import useStyles from "./styles.js";

function ViewCollection(searchedData) {
  const classes = useStyles();
  const [dummyData,setDummyData]=useState(dummyCollectionData);

  function handlePick(id) {
    console.log("entered Pick" + id);
  }

  return (
    <div style={{ paddingTop: 50 }}>
      <Typography variant="h6" style={{ color: "#154001", fontWeight: 600 }}>
        Collection requests
      </Typography>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
        style={{ marginTop: 5, marginBottom: 10 }}
      >{console.log(dummyCollectionData.data)}
        {dummyData
          // .filter((data) => {
          //   if (data.pincode.includes(searchedData)) {
          //     console.log(data.pincode);
          //     return data;
          //   } else {
          //     return false;
          //   }
          // })
          .map((data) => {
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
                  <div className={classes.button}>
                    <IconButton
                      variant="contained"
                      onClick={() => handlePick(data._id)}
                    >
                      <Button variant="contained" color="secondary">
                        Pick
                      </Button>
                    </IconButton>
                  </div>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

export default ViewCollection;
