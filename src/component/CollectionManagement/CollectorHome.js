import React, { useState } from "react";
import useStyles from "./styles.js";
import { Container, Grow, Grid, Button, TextField } from "@material-ui/core";
import ViewCollection from "./ViewCollectionRequests/ViewCollection";
import dummyCollectionData from "./ViewCollectionRequests/DummyCollectionData";

function CollectorHome() {
  const classes = useStyles();
  const [viewMyRequest, setViewMyRequest] = useState(false);
  const [Search, setSearch] = useState("");
  const [PincodeList, setPincodeList] = useState(dummyCollectionData);

  const toggleViewMyPosts = () => {
   
    if (viewMyRequest) {
      setViewMyRequest(false);
    } else {
      setViewMyRequest(true);
    }
  };

  function onSearchClick(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }

  return (
    <div>
      <Grow in>
        <Container style={{ marginTop: 30 }}>
          <Grid
            className={classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
          >
           
            <Grid item xs={12} sm={6} >
              {viewMyRequest ? (
                <Button
                  style={{
                    marginTop: "30px",
                    backgroundColor: "#719D57",
                    color: "#FFFFFF",
                    height: 55,
                    width: 180,
                  }}
                  variant="contained"
                  size="large"
                  onClick={toggleViewMyPosts}
                >
                  All Requests
                </Button>
              ) : (
                <Button
                  style={{
                    marginTop: "30px",
                    backgroundColor: "#154001",
                    color: "#FFFFFF",
                    height: 55,
                    width: 180,
                  }}
                  variant="contained"
                  size="large"
                  onClick={toggleViewMyPosts}
                >
                  My Requests
                </Button>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                style={{
                  marginTop: "30px",
                  width:"100%"
                }}
                fullWidth
                margin="normal"
                id="search"
                type="text"
                name="search"
                label="Search By Pincode"
                variant="outlined"
                autoComplete="off"
                onChange={onSearchClick}
              />
            </Grid>     
            <Grid item xs={12} sd={6}>
              {viewMyRequest?(
                  <div><h2>No task to display</h2></div>
              ):(
                <ViewCollection searchedData={Search}></ViewCollection>
              )}
              
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
}
export default CollectorHome;
