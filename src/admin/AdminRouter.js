import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout } from "../RootRouter";
import { AdminDashboard } from "./AdminDashboard";
import { AdminMain } from './AdminMain';
import { AdminUserList } from "./AdminUserList";
import { AdminBreadRegister } from "./AdminBreadRegister";
import { AdminOrderDelivery } from "./AdminOrderDelivery";
import {Chart} from "../chart/Chart";


export const Admin = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={ AdminDashboard }
        exact
        layout={ AdminMain }
        path="/dashboard"
      />
      <RouteWithLayout
        component={Map}
        exact
        layout={ AdminMain }
        path="/map"
      />
      <RouteWithLayout
        component={AdminUserList}
        exact
        layout={ AdminMain }
        path="/user-list"
      />
      <RouteWithLayout
        component={AdminOrderDelivery}
        exact
        layout={ AdminMain }
        path="/adminOrderDelivery"
      />
      <RouteWithLayout
        component={Chart}
        exact
        layout={ AdminMain }
        path="/chart"
      />
      <RouteWithLayout
        component={AdminBreadRegister}
        exact
        layout={ AdminMain }
        path="/adminBreadRegister"
      />
    </Switch>
  );
};

