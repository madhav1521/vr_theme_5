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
import Sidelink from "./Sidelink";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <Container>
        <Sidelink link={'/dashboard'} title="Dashboard" default={dashboard} active={dashboardnew} alt="Dashboard" name="Dashboard" />
        <Sidelink link={'/innerpage'} title="Innerpage" default={analyze} active={analyzenew} alt="Analysis" name="Analysis" />
        <Sidelink link={'/inbox'} title="Inbox" default={inbox} active={inboxnew} alt="Inbox" name="Inbox" />
        <Sidelink link={'/history'} title="History" default={history} active={historynew} alt="History" name="History" />
        <Sidelink link={'/user'} title="Users" default={users} active={usersnew} alt="Users" name="Users" />
        <Sidelink link={'/maintenance'} title="Maintenance" default={maintenance} active={maintenancenew} alt="Maintenance" name="Maintenance" />
        <Sidelink link={'/setting'} title="Setting" default={setting} active={settingnew} alt="Setting" name="Setting" />
      </Container>
    </div>
  );
}
