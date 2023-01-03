import React, { useEffect, useState, CSSProperties } from 'react'
import { Link} from 'react-router-dom'
import Nav from '../../Components/DashboardComp.js/Nav'
import Overview from '../../Components/DashboardComp.js/Overview'
import Payment from '../../Components/DashboardComp.js/Payment'
import SideBar from '../../Components/DashboardComp.js/Sidebar'
import classes from "./Dashboard.module.css"
import MoonLoader from "react-spinners/MoonLoader";
const Dashboard = () => {
  const [loading, setLoading]=useState(false)
  let [color, setColor] = useState(" rgb(238, 88, 238)");
  const override  = {
    display: "block",
    margin: "300px auto",
    borderColor: "rgb(238, 88, 238)",
  };
 
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 5000)

  },[])
  return (
    <div>
      { loading?
        <MoonLoader color={color} loading={loading} size={50} cssOverride={override} aria-label="Loading Spinner" data-testid="loader"/>
      :
      <div>
        <Nav/>
      <div className={classes.containers}>
          <SideBar/>
          <div className={classes.main}>
              <Overview/>
          </div>
      </div> 
      </div>
      }
    </div>
  )
}

export default Dashboard
