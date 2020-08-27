import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {  Grid } from '@material-ui/core';
import { AdminOrderDelivery } from "./AdminOrderDelivery";
import { AdminUserList } from "./AdminUserList";
import { AdminBreadRegister } from "./AdminBreadRegister";
import { Map } from "../vendor/map";
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
        <Grid style={{position:'relative',left:"0%",width:'30%',height:'50%'}}
        >
          <Chart />
        </Grid>
        <Grid style={{position:'relative',left:"33%",width:'40%',height:'1000px'}}
        >
          <Map />
        </Grid >
        <Grid style={{position:'relative',left:"-38%",width:'30%',height:'100%',top:'0px'}}
        >
          <AdminOrderDelivery />
        </Grid>

        <Grid style={{position:"relative",top:'-600px',width:'30%',height:'70%'}}
        >
          <AdminUserList />
        </Grid>

        <Grid style={{position:'relative',left:"2%",width:'30%',height:'22%',top:'-570px'}}
        >
          <AdminBreadRegister />
        </Grid>

      </Grid>
    </div>
	    </>
}

