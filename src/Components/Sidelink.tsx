import { Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidelink(props: any) {
  return (
    <>
      <NavLink to={props.link} className="sidelinks" title={props.title}>
        <img src={props.default} alt={props.alt} className="default" />
        <img src={props.active} alt={props.alt} className="active-img" />
        <Typography className="text-default">{props.name}</Typography>
      </NavLink>
    </>
  );
}
