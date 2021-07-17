import { Card, CardContent, Typography, Grid, IconButton } from "@material-ui/core";
import useStyles from "./styles.js";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ModifyDeposit from "../ModifyDeposit/ModifyDeposit";
import DeleteDeposit from "../DeleteDeposit/DeleteDeposit";
import { useState, useEffect } from "react";
import PopUp from "../CommonFiles/PopUp";
import axios from "axios";
import { Constants } from "../../../config/constants";

function ViewDeposits() {

  const classes = useStyles();
  const [openEdit, setopenEdit] =useState(false);
  const [id, setId]= useState("");
  const [openDelete, setopenDelete] =useState(false);
  const [edit, setEdit]= useState("null");
  const [depositdata, setDepositData] = useState([]);

  let user = localStorage.getItem("user");
  
  useEffect(() => {
    if (user) {
      user = JSON.parse(user);
      let emailId = user.email;
      if (emailId) {
          axios.get(Constants.VIEW_DEPOSIT+ emailId).then(
              (response) => {
                  setDepositData( response.data.payload)
              });
      }
  }
    //eslint-disable-next-line
  }, []);

  function handleModify(data)
  {
    if (data.drywaste === 1)
    {
      data.drywaste = true;
    }
    else {
      data.drywaste = false;
    }
    if (data.wetwaste === 1)
    {
      data.wetwaste = true;
    }
    else {
      data.wetwaste = false;
    }
    if (data.medicalwaste === 1)
    {
      data.medicalwaste = true;
    }
    else {
      data.medicalwaste = false;
    }
    if (data.others === 1)
    {
      data.others = true;
    }
    else {
      data.others = false;
    }
    setEdit(data)
    setopenEdit(true)
  }
  function handleDelete(id)
  {
    setId(id)
    setopenDelete(true)
  }
  
  if (depositdata.length === 0){
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
          if (data.drywaste === 1)
          {
            garbagetype += " " + "drywaste";
          }
          if (data.wetwaste === 1)
          {
            garbagetype += " " + "wetwaste";
          }
          if (data.medicalwaste === 1)
          {
            garbagetype += " " + "medicalwaste";
          }
          if (data.others === 1)
          {
            garbagetype += " " + "others";
          }
            return (
              <Grid key={data.id} item xs={12} sm={6} md={5}>
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
                      variant="contained"  onClick = {()=>handleDelete(data.id)}>
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
