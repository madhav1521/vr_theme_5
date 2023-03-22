import { Container, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  analyze,
  analyzenew,
  dashboard,
  dashboardnew,
  history,
  historynew,
  inbox,
  inboxnew,
  maintenance,
  maintenancenew,
  setting,
  settingnew,
  users,
  usersnew,
} from "../Assets/Images";

export default function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <Container>
          <NavLink to="/dashboard" className="sidelinks" title="Dashboard">
            <img src={dashboard} alt="" className="default" />
            <img src={dashboardnew} alt="" className="active-img" />
            <Typography className="text-default">Dashboard</Typography>
          </NavLink>
          <NavLink to="/innerpage" className="sidelinks" title="Analysis">
            <img src={analyze} alt="" className="default" />
            <img src={analyzenew} alt="" className="active-img" />
            <Typography className="text-default">Analysis</Typography>
          </NavLink>
          <NavLink to="/inbox" className="sidelinks" title="Inbox">
            <img src={inbox} alt="" className="default" />
            <img src={inboxnew} alt="" className="active-img" />
            <Typography className="text-default">Inbox</Typography>
          </NavLink>
          <NavLink to="/history" className="sidelinks" title="History">
            <img src={history} alt="" className="default" />
            <img src={historynew} alt="" className="active-img" />
            <Typography className="text-default">History</Typography>
          </NavLink>
          <NavLink to="/user" className="sidelinks" title="Users">
            <img src={users} alt="" className="default" />
            <img src={usersnew} alt="" className="active-img" />
            <Typography className="text-default">Users</Typography>
          </NavLink>
          <NavLink to="/maintenance" className="sidelinks" title="Maintenance">
            <img src={maintenance} alt="" className="default" />
            <img src={maintenancenew} alt="" className="active-img" />
            <Typography className="text-default">Maintenance</Typography>
          </NavLink>
          <NavLink to="/setting" className="sidelinks" title="Setting">
            <img src={setting} alt="" className="default" />
            <img src={settingnew} alt="" className="active-img" />
            <Typography className="text-default">Setting</Typography>
          </NavLink>
        </Container>
      </div>
    </div>
  );
}
