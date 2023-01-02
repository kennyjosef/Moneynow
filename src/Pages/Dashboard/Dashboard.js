import React from 'react'
import { Link} from 'react-router-dom'
import Nav from '../../Components/DashboardComp.js/Nav'
import Overview from '../../Components/DashboardComp.js/Overview'
import Payment from '../../Components/DashboardComp.js/Payment'
import SideBar from '../../Components/DashboardComp.js/Sidebar'
import classes from "./Dashboard.module.css"
const Dashboard = () => {
  return (
    <div>
      <Nav/>
      <div className={classes.containers}>
          <SideBar/>
          <div className={classes.main}>
              <Overview/>
          </div>
      </div> 
    </div>
  )
}

export default Dashboard
