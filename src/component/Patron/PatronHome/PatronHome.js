/* Dhrumil Amish Shah */
import React, { useState, useEffect } from "react";
import { Button, Container, Grow, Grid, TextField } from "@material-ui/core";
import { getPatronPosts, deletePatronPost } from "../../../apis/patronPostAPIs.js";
import PatronForm from "../PatronForm/PatronForm";
import PatronPosts from "../PatronPosts/PatronPosts";
import useStyles from "./styles.js";

const PatronHome = () => {
  const [patronPosts, setPatronPosts] = useState([]);
  const [viewMyPosts, setViewMyPosts] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    getAllPatronPosts();
  }, []);

  async function getAllPatronPosts() {
    await getPatronPosts().then((res) => {
      const responseExists = (res.data !== null || res.data !== undefined)
      if (responseExists) {
        res.data.payload.allPatronPosts.forEach((patronPost) => {
          patronPost.display = true;
        });
      }
      setPatronPosts(res.data.payload.allPatronPosts);
    }).catch((err) => {
      setPatronPosts([]);
    });
  };

  const toggleViewMyPosts = () => {
    const loggedInUserId = parseInt(JSON.parse(localStorage.getItem("user")).id);
    const viewMyPostsStatus = !viewMyPosts;
    if (viewMyPostsStatus) {
      patronPosts.forEach(function (post) {
        if (post.userId === loggedInUserId) {
          post.display = true;
        } else {
          post.display = false;
        }
      });
    } else {
      patronPosts.forEach(function (post) {
        post.display = true;
      });
    }
    setPatronPosts(patronPosts);
    setViewMyPosts(viewMyPostsStatus);
  };

  async function deletePost(patronPostId) {
    const userId = parseInt(JSON.parse(localStorage.getItem("user")).id);
    await deletePatronPost(userId, patronPostId).then((res) => {
      const responseExists = (res.data !== null || res.data !== undefined)
      if (responseExists) {
        patronPosts.splice(patronPosts.findIndex((post) => post.patronPostId === patronPostId), 1);
        setPatronPosts((patronPosts) => [...patronPosts]);
      }
    }).catch((err) => {
      console.log(err);
    });
  };

  const filterPatronPosts = (e) => {
    const loggedInUserId = parseInt(JSON.parse(localStorage.getItem("user")).id);
    if (e.target.value !== null || e.target.value !== "") {
      patronPosts.forEach(function (post) {
        const streetAddress = post.streetAddress.toLowerCase();
        const city = post.city.toLowerCase();
        const province = post.province.toLowerCase();
        const zipCode = post.zipCode.toLowerCase();
        const fullAddress = (
          post.streetAddress +
          " " +
          post.city +
          " " +
          post.province +
          " " +
          post.zipCode
        ).toLowerCase();
        const searchQuery = e.target.value.toLowerCase();
        if (viewMyPosts) {
          if (loggedInUserId === post.userId) {
            if (
              streetAddress.includes(searchQuery) ||
              city.includes(searchQuery) ||
              province.includes(searchQuery) ||
              zipCode.includes(searchQuery) ||
              fullAddress.includes(searchQuery)
            ) {
              post.display = true;
            } else {
              post.display = false;
            }
          } else {
            post.display = false;
          }
        } else {
          if (
            streetAddress.includes(searchQuery) ||
            city.includes(searchQuery) ||
            province.includes(searchQuery) ||
            zipCode.includes(searchQuery) ||
            fullAddress.includes(searchQuery)
          ) {
            post.display = true;
          } else {
            post.display = false;
          }
        }
      });
    } else {
      if (viewMyPosts) {
        patronPosts.forEach(function (post) {
          post.display = (loggedInUserId === post.userId) ? true : false;
        });
      } else {
        patronPosts.forEach(function (post) {
          post.display = true;
        });
      }
    }
    setPatronPosts((patronPosts) => [...patronPosts]);
  };

  return (
    <Grow in>
      <Container style={{ marginTop: 56 }}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={12} md={2}>
            {viewMyPosts ? (
              <Button
                style={{
                  marginTop: "6px",
                  backgroundColor: "#719D57",
                  color: "#FFFFFF",
                  height: 55,
                  width: 180,
                }}
                variant="contained"
                size="large"
                onClick={toggleViewMyPosts}
              >
                View All Posts
              </Button>
            ) : (
              <Button
                style={{
                  marginTop: "6px",
                  backgroundColor: "#154001",
                  color: "#FFFFFF",
                  height: 55,
                  width: 180,
                }}
                variant="contained"
                size="large"
                onClick={toggleViewMyPosts}
              >
                View My Posts
              </Button>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={10}>
            <TextField
              fullWidth
              margin="normal"
              id="search"
              type="text"
              name="search"
              label="Search By Address"
              variant="outlined"
              autoComplete="off"
              required
              onChange={filterPatronPosts}
            />
          </Grid>
        </Grid>
        <Grid
          className={classes.mainContainer}
          container
          justify="space-between"
          alignItems="stretch"
        >
          <Grid item xs={12} md={7}>
            <PatronPosts patronPosts={patronPosts} deletePost={deletePost} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PatronForm
              patronPosts={patronPosts}
              setPatronPosts={setPatronPosts}
            />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default PatronHome;