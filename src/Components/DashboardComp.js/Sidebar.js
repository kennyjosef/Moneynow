import React, { useState } from "react";
import classes from "./Sidebar.module.css";
import Home from "../../Assets/home.svg"
import Group from "../../Assets/lefticon.svg"
import Atm from "../../Assets/atm.svg"
import More from "../../Assets/more.svg"
import Referral from "../../Assets/referral.svg"
import logout from "../../Assets/logout.svg"

import logo from "../../Assets/moneylogo.svg";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className={classes.headers}>
      <div className="logo">
        <img src={logo} alt="Moneynow" />
      </div>
      <ul className={classes.ul}>
         <Link  to="/dashboard"><img src={Home} alt="home" />Overview</Link>
         <Link  to="/join-group"><img src={Group} alt="group" />Join Group </Link>
         <Link  to="/payment"><img src={Atm} alt="atm" />Payment</Link>
         <Link  to="/referral"><img src={Referral} alt="referral" />Referral</Link>
         <Link  to="#"><img src={More} alt="more" />More</Link>
         <Link  to="#"><img src={logout} alt="out" />Sign out</Link>
      </ul>
    </div>
  );
};

export default SideBar;


