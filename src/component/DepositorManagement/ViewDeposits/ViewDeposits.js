import dummyViewData from "./DummyDepositData";
import { Card, CardContent, Typography, Grid, IconButton } from "@material-ui/core";
import useStyles from "./styles.js";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ModifyDeposit from "../ModifyDeposit/ModifyDeposit";
import DeleteDeposit from "../DeleteDeposit/DeleteDeposit";
import { useState } from "react";
import PopUp from "../CommonFiles/PopUp";
import axios from "axios";
import { Constants } from "../../../config/constants";

function ViewDeposits() {

  const classes = useStyles();
  const [openEdit, setopenEdit] =useState(false);
  const [id, setId]= useState("");
  const [openDelete, setopenDelete] =useState(false);
  const [edit, setEdit]= useState("null");

  let user = localStorage.getItem("user");
  let depositdata = []
  if (user) {
      user = JSON.parse(user);
      let emailId = user.email;
      if (emailId) {
          axios.get(Constants.VIEW_DEPOSIT+ emailId).then(
              (response) => {
                  depositdata = response.data.payload;                  
              });
      }
  }

  function handleModify(data)
  {
    console.log("entered" + data.id)
    console.log(data)
    setEdit(data)
    setopenEdit(true)
  }
  function handleDelete(id)
  {
    setId(id)
    setopenDelete(true)
  }
  
  if (!depositdata.length){
    return (
      <div style={{ paddingTop: 50 }}>
      <Typography variant="h6" style={{ color: "#154001", fontWeight: 600 }}>My Deposits</Typography>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
        style={{ marginTop: 5, marginBottom: 10 }}
      ></Grid>
      <Typography variant="body1" color={"textSecondary"} component="p"  style= {{color : "black"}}>
        No Deposits Scheduled
      </Typography>
      </div>
    );
  }
  else{
  return (
    <div style={{ paddingTop: 50 }}>
      <Typography variant="h6" style={{ color: "#154001", fontWeight: 600 }}>My Deposits</Typography>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
        style={{ marginTop: 5, marginBottom: 10, alignItems:"center" }}
      >
        {depositdata.map((data) => {
          let garbagetype = "";
          if (data.drywaste)
          {
            garbagetype += " " + "drywaste";
          }
          if (data.wetwaste)
          {
            garbagetype += " " + "wetwaste";
          }
          if (data.medicalwaste)
          {
            garbagetype += " " + "medicalwaste";
          }
          if (data.others)
          {
            garbagetype += " " + "others";
          }
            return (
              <Grid key={data._id} item xs={12} sm={6} md={5}>
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
                    >{`Garbage Type : ${garbagetype}`}</Typography>
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
                  <div className = {classes.button}>
                    <IconButton 
                      variant="contained"
                      onClick= {()=>handleModify(data)}>
                        <EditIcon style={{ color: '#154001' }}>
                      Modify
                      </EditIcon>
                    </IconButton>
                    <IconButton
                      variant="contained"  onClick = {()=>handleDelete(data._id)}>
                        <DeleteIcon style={{ color: '#F44336' }}>
                      Delete
                      </DeleteIcon>
                    </IconButton>
                  </div>
                </Card>
              </Grid>
            );
        })}
      </Grid>
      <PopUp open = {openEdit} setopen = {setopenEdit} heading = {"Update Deposit"} onClose = {()=>setopenEdit(false)}>
      <ModifyDeposit edit ={edit}></ModifyDeposit>
        </PopUp>
          <DeleteDeposit open = {openDelete} setopen= {setopenDelete } onClose = {()=>setopenDelete(false)} id = {id}></DeleteDeposit>
    </div>
  );
      }
}
export default ViewDeposits;
