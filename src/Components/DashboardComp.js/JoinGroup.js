import React, {useState, useEffect} from 'react'
import Nav from './Nav'
import SideBar from './Sidebar'
import MoonLoader from "react-spinners/MoonLoader";
import classes from './Payment.module.css'

const JoinGroup = () => {
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
      }, 3000)
  
    },[])
  return (
    <div>
        <Nav/>
        <div className={classes.containers}>
            <SideBar/>
            {
                loading ?
                <MoonLoader color={color} loading={loading} size={50} cssOverride={override} aria-label="Loading Spinner" data-testid="loader"/>:
                <div className={classes.main}>
                    <h3>woo!</h3>

                </div>
            }

        </div>
    </div>
  )
}

export default JoinGroup