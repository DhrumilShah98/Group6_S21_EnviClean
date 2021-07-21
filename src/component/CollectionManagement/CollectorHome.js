/* Author: Parth Thummar */
import React, { useState } from "react";
import { Container, Grow, Grid, Button } from "@material-ui/core";
import ViewCollection from "./ViewCollectionRequests/ViewCollection";
import ViewPersonalCollection from "./ViewCollectionRequests/ViewPersonalCollection";

function CollectorHome() {
  const [viewMyRequest, setViewMyRequest] = useState(false);

  const toggleViewMyPosts = () => {
    if (viewMyRequest) {
      setViewMyRequest(false);
    } else {
      setViewMyRequest(true);
    }
  };

  return (
    <div>
      <Grow in>
        <Container style={{ marginTop: 30 }}>
          <Grid container justify="space-between" alignItems="stretch">
            <Grid item xs={12} sm={6}>
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

            <Grid item xs={12} sd={6}>
              {viewMyRequest ? (
                <ViewPersonalCollection></ViewPersonalCollection>
              ) : (
                <ViewCollection></ViewCollection>
              )}
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
}
export default CollectorHome;
