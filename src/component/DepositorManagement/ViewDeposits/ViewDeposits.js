import dummyViewData from "./DummyDepositData";
import { Card, CardContent, Typography, Grid, IconButton } from "@material-ui/core";
import useStyles from "./styles.js";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ModifyDeposit from "../ModifyDeposit/ModifyDeposit";
import DeleteDeposit from "../DeleteDeposit/DeleteDeposit";
import { useState } from "react";
import PopUp from "../CommonFiles/PopUp";
function ViewDeposits() {

  const classes = useStyles();
  const [openEdit, setopenEdit] =useState(false);
  const [id, setId]= useState("");
  const [openDelete, setopenDelete] =useState(false);
  const [edit, setEdit]= useState("null");
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
  
  if (!dummyViewData.length){
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
        style={{ marginTop: 5, marginBottom: 10 }}
      >
        {dummyViewData.map((data) => {
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
