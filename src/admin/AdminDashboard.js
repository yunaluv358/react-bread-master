import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {  Grid } from '@material-ui/core';
import { AdminOrderDelivery } from "./AdminOrderDelivery";
import { AdminUserList } from "./AdminUserList";
import { AdminBreadRegister } from "./AdminBreadRegister";
import { Map } from "../vendor/map/Map";
import {Chart} from "../chart/Chart";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

export const AdminDashboard = () => {
  const classes = useStyles();

  return <>
    <div className={classes.root}>
      <Grid
          container
          spacing={5}
      >
        <Grid style={{position:'relative',left:"0%",width:'450px',height:'400px'}}>
          <Chart  />
        </Grid>
        <Grid style={{position:'relative',left:"-280px",width:'500px',height:'400px'}}>
          <Map/>
        </Grid >
        <Grid >
          <AdminOrderDelivery style={{position:"relative",width:'30%',height:'550px',left:"-70%"}}  />
        </Grid>
        <Grid>
          <AdminUserList style={{position:"relative",top:'-300px',width:'30%',height:'550px',left:"-70%"}} />
        </Grid>
        {/*<Grid*/}
        {/*>*/}
        {/*  <AdminBreadRegister style={{position:"relative",top:'-300px',width:'30%',height:'550px',left:"-70%"}} />*/}
        {/*</Grid>*/}
      </Grid>
    </div>
  </>
}